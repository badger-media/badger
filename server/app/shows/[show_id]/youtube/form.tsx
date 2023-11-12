"use client";

import Form from "@/components/Form";
import type {
  ContinuityItem,
  Metadata,
  MetadataField,
  Rundown,
  Show,
} from "@bowser/prisma/client";
import { createStreamsPayloadSchema } from "./schema";
import { doCreateStreams } from "./actions";
import { DeepPartial, useController } from "react-hook-form";
import {
  CheckBoxField,
  DatePickerField,
  Field,
  HiddenField,
  SelectField,
} from "@/components/FormFields";
import { ReactNode } from "react";
import { RundownItem } from "@bowser/prisma/client";
import { z } from "zod";
import { identity } from "lodash";

interface MetaValueWithField extends Metadata {
  field: MetadataField;
}

interface RundownWithItemsAndMeta extends Rundown {
  items: RundownItem[];
  metadata: MetaValueWithField[];
}

export interface YTStreamsShowData extends Show {
  rundowns: RundownWithItemsAndMeta[];
  continuityItems: ContinuityItem[];
  metadata: MetaValueWithField[];
}

function StreamItem(props: { namePrefix: string; name: string }) {
  const enabled = useController({
    name: props.namePrefix + ".enabled",
  });

  return (
    <div className="border p-4">
      <div className="flex flex-row">
        <CheckBoxField name={`${props.namePrefix}.enabled`} />
        <h3 className="text-xl ml-2">{props.name}</h3>
      </div>
      {enabled.field.value && (
        <>
          <Field name={props.namePrefix + ".title"} label="Title" />
          <Field
            name={props.namePrefix + ".description"}
            label="Description"
            as="textarea"
          />
          <DatePickerField
            label="Scheduled Start"
            name={props.namePrefix + ".start"}
            showTimeSelect
            timeIntervals={15}
          />
          <DatePickerField
            label="Scheduled End"
            name={props.namePrefix + ".end"}
            showTimeSelect
            timeIntervals={15}
          />
          <SelectField
            name={props.namePrefix + ".visibility"}
            label="Visibility"
            options={["public", "unlisted", "private"]}
            getOptionValue={identity}
            renderOption={(v) => v[0].toLocaleUpperCase() + v.slice(1)}
            filter={false}
          />
        </>
      )}
    </div>
  );
}

export default function CreateYTStreamsForm(props: {
  show: YTStreamsShowData;
}) {
  const items = [...props.show.rundowns, ...props.show.continuityItems].sort(
    (a, b) => a.order - b.order,
  );

  const itemFields: ReactNode[] = [];
  const initialValues: DeepPartial<z.infer<typeof createStreamsPayloadSchema>> =
    {
      items: [],
      resolution: "1080p",
      frameRate: "30fps",
      ingestionType: "rtmp",
    };
  let time = props.show.start.getTime();
  let idx = 0;

  for (const item of items) {
    const durationSeconds =
      "durationSeconds" in item
        ? item.durationSeconds
        : item.items.map((x) => x.durationSeconds).reduce((a, b) => a + b, 0);
    initialValues.items!.push({
      enabled: !("durationSeconds" in item), // it's a rundown
      title: item.name, // TODO metadata
      description: "TODO", // TODO metadata
      start: new Date(time),
      end: new Date(time + durationSeconds * 1000),
      visibility: "public",
    });
    itemFields.push(
      <StreamItem
        key={item.order}
        name={item.name}
        namePrefix={`items[${
          idx + 1 /* all will be shifted down one at the unshift() below */
        }]`}
      />,
    );
    idx++;
    time += durationSeconds;
  }

  initialValues.items!.unshift({
    title: props.show.name,
    description: "TODO", // TODO metadata
    start: props.show.start,
    end: new Date(time),
    enabled: true,
    visibility: "public",
  });
  itemFields.unshift(
    <StreamItem key={-1} name={"Main Stream"} namePrefix={`items[0]`} />,
  );

  return (
    <Form
      schema={createStreamsPayloadSchema}
      action={doCreateStreams}
      initialValues={initialValues}
    >
      <HiddenField name="show_id" value={props.show.id.toString(10)} />
      <SelectField
        name="resolution"
        label="Stream Resolution"
        options={["1080p", "720p"]}
        getOptionValue={identity}
        renderOption={identity}
        filter={false}
      />
      <SelectField
        name="frameRate"
        label="Stream Frame Rate"
        options={["30fps", "60fps"]}
        getOptionValue={identity}
        renderOption={identity}
        filter={false}
      />
      <SelectField
        name="ingestionType"
        label="Ingestion Type"
        options={["rtmp", "dash"]}
        getOptionValue={identity}
        renderOption={identity}
        filter={false}
      />
      <div className="flex flex-col space-y-4 my-6">{itemFields}</div>
    </Form>
  );
}
