import Button from "@badger/components/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@badger/components/table";
import { useMemo } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@badger/components/dropdown-menu";
import { IoChevronDownSharp } from "react-icons/io5";
import { Badge } from "@badger/components/badge";
import { dispatch, useAppSelector } from "../store";
// import { getQueryKey } from "@trpc/react-query";

function humaniseSize(bytes: number) {
  if (bytes < 1024) {
    return `${bytes} bytes`;
  }
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(2)} KiB`;
  }
  if (bytes < 1024 * 1024 * 1024) {
    return `${(bytes / 1024 / 1024).toFixed(2)} MiB`;
  }
  return `${(bytes / 1024 / 1024 / 1024).toFixed(2)} GiB`;
}

export function MediaSettings() {
  const localMedia = useAppSelector((state) => state.localMedia.media);
  const mediaPath = useAppSelector((state) => state.settings.media.mediaPath);
  const currentShow = useAppSelector((state) => state.selectedShow.show);
  const totalSpace = localMedia
    .map((x) => x.sizeBytes!)
    .reduce((a, b) => a + b, 0);

  const mediaInShow = useMemo(() => {
    const ids = new Set<number>();
    currentShow?.continuityItems.forEach((x) => {
      if (x.media) {
        ids.add(x.media.id);
      }
    });
    currentShow?.rundowns.forEach((x) =>
      x.items.forEach((y) => {
        if (y.media) {
          ids.add(y.media.id);
        }
      }),
    );
    return ids;
  }, [currentShow]);
  function isMediaInShow(item: (typeof localMedia)[0]) {
    return mediaInShow.has(item.mediaID);
  }

  return (
    <div>
      <h2 className="text-xl">Media</h2>
      <p>
        Location: <code>{mediaPath}</code>
      </p>
      <p>Total disk usage: {humaniseSize(totalSpace)}</p>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button color="light">
              <IoChevronDownSharp className="mr-2 h-4 w-2" /> Delete media older
              than&hellip;
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() => dispatch.deleteOldMedia({ minAgeDays: 7 })}
            >
              1 week
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => dispatch.deleteOldMedia({ minAgeDays: 14 })}
            >
              2 weeks
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => dispatch.deleteOldMedia({ minAgeDays: 29 })}
            >
              1 month
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Path</TableHead>
              <TableHead>Size</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {localMedia.map((media) => (
              <TableRow
                key={media.mediaID}
                data-testid={`MediaSettings.Row.${media.mediaID}`}
              >
                <TableCell>{media.path.replace(mediaPath, "")}</TableCell>
                <TableCell>{humaniseSize(media.sizeBytes!)}</TableCell>
                <TableCell>
                  {isMediaInShow(media) ? (
                    <Badge variant="default">In use</Badge>
                  ) : (
                    <Badge variant="dark">Safe to delete</Badge>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
