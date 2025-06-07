export declare const appRouter: import("@trpc/server").CreateRouterInner<
  import("@trpc/server").RootConfig<{
    ctx: object;
    meta: object;
    errorShape: import("@trpc/server").DefaultErrorShape;
    transformer: typeof import("superjson").default;
  }>,
  {
    ping: import("@trpc/server").BuildProcedure<
      "query",
      {
        _config: import("@trpc/server").RootConfig<{
          ctx: object;
          meta: object;
          errorShape: import("@trpc/server").DefaultErrorShape;
          transformer: typeof import("superjson").default;
        }>;
        _ctx_out: object;
        _input_in: typeof import("@trpc/server").unsetMarker;
        _input_out: typeof import("@trpc/server").unsetMarker;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
        _meta: object;
      },
      {
        ping: string;
        version: string;
      }
    >;
    shows: import("@trpc/server").CreateRouterInner<
      import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: typeof import("superjson").default;
      }>,
      {
        listUpcoming: import("@trpc/server").BuildProcedure<
          "query",
          {
            _config: import("@trpc/server").RootConfig<{
              ctx: object;
              meta: object;
              errorShape: import("@trpc/server").DefaultErrorShape;
              transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in:
              | {
                  gracePeriodHours?: number | undefined;
                }
              | undefined;
            _input_out:
              | {
                  gracePeriodHours: number;
                }
              | undefined;
            _output_in: {
              id: number;
              name: string;
              start: Date;
              version: number;
            }[];
            _output_out: {
              id: number;
              name: string;
              start: Date;
              version: number;
            }[];
          },
          unknown
        >;
        get: import("@trpc/server").BuildProcedure<
          "query",
          {
            _config: import("@trpc/server").RootConfig<{
              ctx: object;
              meta: object;
              errorShape: import("@trpc/server").DefaultErrorShape;
              transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
              id: number;
            };
            _input_out: {
              id: number;
            };
            _output_in: {
              id: number;
              name: string;
              start: Date;
              version: number;
              continuityItems: {
                id: number;
                name: string;
                order: number;
                showId: number;
                durationSeconds: number;
                mediaId: number | null;
                media: {
                  path: string | null;
                  id: number;
                  name: string;
                  durationSeconds: number;
                  state:
                    | "Pending"
                    | "Processing"
                    | "Ready"
                    | "ReadyWithWarnings"
                    | "ProcessingFailed"
                    | "Archived";
                  rawPath: string;
                } | null;
              }[];
              rundowns: {
                id: number;
                name: string;
                order: number;
                showId: number;
                items: {
                  type: "Segment" | "VT";
                  id: number;
                  name: string;
                  order: number;
                  durationSeconds: number;
                  mediaId: number | null;
                  media: {
                    path: string | null;
                    id: number;
                    name: string;
                    durationSeconds: number;
                    state:
                      | "Pending"
                      | "Processing"
                      | "Ready"
                      | "ReadyWithWarnings"
                      | "ProcessingFailed"
                      | "Archived";
                    rawPath: string;
                  } | null;
                  rundownId: number;
                  notes: string;
                }[];
                assets: {
                  id: number;
                  name: string;
                  order: number;
                  mediaId: number;
                  media: {
                    path: string | null;
                    id: number;
                    name: string;
                    durationSeconds: number;
                    state:
                      | "Pending"
                      | "Processing"
                      | "Ready"
                      | "ReadyWithWarnings"
                      | "ProcessingFailed"
                      | "Archived";
                    rawPath: string;
                  };
                  rundownId: number;
                  category: string;
                }[];
              }[];
            };
            _output_out: {
              id: number;
              name: string;
              start: Date;
              version: number;
              continuityItems: {
                id: number;
                name: string;
                order: number;
                showId: number;
                durationSeconds: number;
                mediaId: number | null;
                media: {
                  path: string | null;
                  id: number;
                  name: string;
                  durationSeconds: number;
                  state:
                    | "Pending"
                    | "Processing"
                    | "Ready"
                    | "ReadyWithWarnings"
                    | "ProcessingFailed"
                    | "Archived";
                  rawPath: string;
                } | null;
              }[];
              rundowns: {
                id: number;
                name: string;
                order: number;
                showId: number;
                items: {
                  type: "Segment" | "VT";
                  id: number;
                  name: string;
                  order: number;
                  durationSeconds: number;
                  mediaId: number | null;
                  media: {
                    path: string | null;
                    id: number;
                    name: string;
                    durationSeconds: number;
                    state:
                      | "Pending"
                      | "Processing"
                      | "Ready"
                      | "ReadyWithWarnings"
                      | "ProcessingFailed"
                      | "Archived";
                    rawPath: string;
                  } | null;
                  rundownId: number;
                  notes: string;
                }[];
                assets: {
                  id: number;
                  name: string;
                  order: number;
                  mediaId: number;
                  media: {
                    path: string | null;
                    id: number;
                    name: string;
                    durationSeconds: number;
                    state:
                      | "Pending"
                      | "Processing"
                      | "Ready"
                      | "ReadyWithWarnings"
                      | "ProcessingFailed"
                      | "Archived";
                    rawPath: string;
                  };
                  rundownId: number;
                  category: string;
                }[];
              }[];
            };
          },
          unknown
        >;
        getVersion: import("@trpc/server").BuildProcedure<
          "query",
          {
            _config: import("@trpc/server").RootConfig<{
              ctx: object;
              meta: object;
              errorShape: import("@trpc/server").DefaultErrorShape;
              transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
              id: number;
            };
            _input_out: {
              id: number;
            };
            _output_in: {
              version: number;
            };
            _output_out: {
              version: number;
            };
          },
          unknown
        >;
        create: import("@trpc/server").BuildProcedure<
          "mutation",
          {
            _config: import("@trpc/server").RootConfig<{
              ctx: object;
              meta: object;
              errorShape: import("@trpc/server").DefaultErrorShape;
              transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: {};
            _input_in: import("@badger/prisma/client").Prisma.ShowCreateInput;
            _input_out: import("@badger/prisma/client").Prisma.ShowCreateInput;
            _output_in: {
              id: number;
              name: string;
              start: Date;
              version: number;
              continuityItems: {
                id: number;
                name: string;
                order: number;
                showId: number;
                durationSeconds: number;
                mediaId: number | null;
                media: {
                  path: string | null;
                  id: number;
                  name: string;
                  durationSeconds: number;
                  state:
                    | "Pending"
                    | "Processing"
                    | "Ready"
                    | "ReadyWithWarnings"
                    | "ProcessingFailed"
                    | "Archived";
                  rawPath: string;
                } | null;
              }[];
              rundowns: {
                id: number;
                name: string;
                order: number;
                showId: number;
                items: {
                  type: "Segment" | "VT";
                  id: number;
                  name: string;
                  order: number;
                  durationSeconds: number;
                  mediaId: number | null;
                  media: {
                    path: string | null;
                    id: number;
                    name: string;
                    durationSeconds: number;
                    state:
                      | "Pending"
                      | "Processing"
                      | "Ready"
                      | "ReadyWithWarnings"
                      | "ProcessingFailed"
                      | "Archived";
                    rawPath: string;
                  } | null;
                  rundownId: number;
                  notes: string;
                }[];
                assets: {
                  id: number;
                  name: string;
                  order: number;
                  mediaId: number;
                  media: {
                    path: string | null;
                    id: number;
                    name: string;
                    durationSeconds: number;
                    state:
                      | "Pending"
                      | "Processing"
                      | "Ready"
                      | "ReadyWithWarnings"
                      | "ProcessingFailed"
                      | "Archived";
                    rawPath: string;
                  };
                  rundownId: number;
                  category: string;
                }[];
              }[];
            };
            _output_out: {
              id: number;
              name: string;
              start: Date;
              version: number;
              continuityItems: {
                id: number;
                name: string;
                order: number;
                showId: number;
                durationSeconds: number;
                mediaId: number | null;
                media: {
                  path: string | null;
                  id: number;
                  name: string;
                  durationSeconds: number;
                  state:
                    | "Pending"
                    | "Processing"
                    | "Ready"
                    | "ReadyWithWarnings"
                    | "ProcessingFailed"
                    | "Archived";
                  rawPath: string;
                } | null;
              }[];
              rundowns: {
                id: number;
                name: string;
                order: number;
                showId: number;
                items: {
                  type: "Segment" | "VT";
                  id: number;
                  name: string;
                  order: number;
                  durationSeconds: number;
                  mediaId: number | null;
                  media: {
                    path: string | null;
                    id: number;
                    name: string;
                    durationSeconds: number;
                    state:
                      | "Pending"
                      | "Processing"
                      | "Ready"
                      | "ReadyWithWarnings"
                      | "ProcessingFailed"
                      | "Archived";
                    rawPath: string;
                  } | null;
                  rundownId: number;
                  notes: string;
                }[];
                assets: {
                  id: number;
                  name: string;
                  order: number;
                  mediaId: number;
                  media: {
                    path: string | null;
                    id: number;
                    name: string;
                    durationSeconds: number;
                    state:
                      | "Pending"
                      | "Processing"
                      | "Ready"
                      | "ReadyWithWarnings"
                      | "ProcessingFailed"
                      | "Archived";
                    rawPath: string;
                  };
                  rundownId: number;
                  category: string;
                }[];
              }[];
            };
          },
          unknown
        >;
        update: import("@trpc/server").BuildProcedure<
          "mutation",
          {
            _config: import("@trpc/server").RootConfig<{
              ctx: object;
              meta: object;
              errorShape: import("@trpc/server").DefaultErrorShape;
              transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: {};
            _input_in: {
              id: number;
              data: import("@badger/prisma/client").Prisma.ShowUpdateInput;
            };
            _input_out: {
              id: number;
              data: import("@badger/prisma/client").Prisma.ShowUpdateInput;
            };
            _output_in: {
              id: number;
              name: string;
              start: Date;
              version: number;
              continuityItems: {
                id: number;
                name: string;
                order: number;
                showId: number;
                durationSeconds: number;
                mediaId: number | null;
                media: {
                  path: string | null;
                  id: number;
                  name: string;
                  durationSeconds: number;
                  state:
                    | "Pending"
                    | "Processing"
                    | "Ready"
                    | "ReadyWithWarnings"
                    | "ProcessingFailed"
                    | "Archived";
                  rawPath: string;
                } | null;
              }[];
              rundowns: {
                id: number;
                name: string;
                order: number;
                showId: number;
                items: {
                  type: "Segment" | "VT";
                  id: number;
                  name: string;
                  order: number;
                  durationSeconds: number;
                  mediaId: number | null;
                  media: {
                    path: string | null;
                    id: number;
                    name: string;
                    durationSeconds: number;
                    state:
                      | "Pending"
                      | "Processing"
                      | "Ready"
                      | "ReadyWithWarnings"
                      | "ProcessingFailed"
                      | "Archived";
                    rawPath: string;
                  } | null;
                  rundownId: number;
                  notes: string;
                }[];
                assets: {
                  id: number;
                  name: string;
                  order: number;
                  mediaId: number;
                  media: {
                    path: string | null;
                    id: number;
                    name: string;
                    durationSeconds: number;
                    state:
                      | "Pending"
                      | "Processing"
                      | "Ready"
                      | "ReadyWithWarnings"
                      | "ProcessingFailed"
                      | "Archived";
                    rawPath: string;
                  };
                  rundownId: number;
                  category: string;
                }[];
              }[];
            };
            _output_out: {
              id: number;
              name: string;
              start: Date;
              version: number;
              continuityItems: {
                id: number;
                name: string;
                order: number;
                showId: number;
                durationSeconds: number;
                mediaId: number | null;
                media: {
                  path: string | null;
                  id: number;
                  name: string;
                  durationSeconds: number;
                  state:
                    | "Pending"
                    | "Processing"
                    | "Ready"
                    | "ReadyWithWarnings"
                    | "ProcessingFailed"
                    | "Archived";
                  rawPath: string;
                } | null;
              }[];
              rundowns: {
                id: number;
                name: string;
                order: number;
                showId: number;
                items: {
                  type: "Segment" | "VT";
                  id: number;
                  name: string;
                  order: number;
                  durationSeconds: number;
                  mediaId: number | null;
                  media: {
                    path: string | null;
                    id: number;
                    name: string;
                    durationSeconds: number;
                    state:
                      | "Pending"
                      | "Processing"
                      | "Ready"
                      | "ReadyWithWarnings"
                      | "ProcessingFailed"
                      | "Archived";
                    rawPath: string;
                  } | null;
                  rundownId: number;
                  notes: string;
                }[];
                assets: {
                  id: number;
                  name: string;
                  order: number;
                  mediaId: number;
                  media: {
                    path: string | null;
                    id: number;
                    name: string;
                    durationSeconds: number;
                    state:
                      | "Pending"
                      | "Processing"
                      | "Ready"
                      | "ReadyWithWarnings"
                      | "ProcessingFailed"
                      | "Archived";
                    rawPath: string;
                  };
                  rundownId: number;
                  category: string;
                }[];
              }[];
            };
          },
          unknown
        >;
      }
    >;
    media: import("@trpc/server").CreateRouterInner<
      import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: typeof import("superjson").default;
      }>,
      {
        get: import("@trpc/server").BuildProcedure<
          "query",
          {
            _config: import("@trpc/server").RootConfig<{
              ctx: object;
              meta: object;
              errorShape: import("@trpc/server").DefaultErrorShape;
              transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
              id: number;
            };
            _input_out: {
              id: number;
            };
            _output_in: {
              path: string | null;
              id: number;
              name: string;
              continuityItems: {
                id: number;
                name: string;
                order: number;
                showId: number;
                durationSeconds: number;
                mediaId: number | null;
              }[];
              durationSeconds: number;
              state:
                | "Pending"
                | "Processing"
                | "Ready"
                | "ReadyWithWarnings"
                | "ProcessingFailed"
                | "Archived";
              rawPath: string;
              assets: {
                id: number;
                name: string;
                order: number;
                mediaId: number;
                rundownId: number;
                category: string;
              }[];
              rundownItems: {
                type: "Segment" | "VT";
                id: number;
                name: string;
                order: number;
                durationSeconds: number;
                mediaId: number | null;
                rundownId: number;
                notes: string;
              }[];
              tasks: {
                id: number;
                state:
                  | "Pending"
                  | "Running"
                  | "Complete"
                  | "Failed"
                  | "Warning";
                description: string;
                media_id: number;
                additionalInfo: string;
              }[];
              downloadURL?: string | null | undefined;
            };
            _output_out: {
              path: string | null;
              id: number;
              name: string;
              continuityItems: {
                id: number;
                name: string;
                order: number;
                showId: number;
                durationSeconds: number;
                mediaId: number | null;
              }[];
              durationSeconds: number;
              state:
                | "Pending"
                | "Processing"
                | "Ready"
                | "ReadyWithWarnings"
                | "ProcessingFailed"
                | "Archived";
              rawPath: string;
              assets: {
                id: number;
                name: string;
                order: number;
                mediaId: number;
                rundownId: number;
                category: string;
              }[];
              rundownItems: {
                type: "Segment" | "VT";
                id: number;
                name: string;
                order: number;
                durationSeconds: number;
                mediaId: number | null;
                rundownId: number;
                notes: string;
              }[];
              tasks: {
                id: number;
                state:
                  | "Pending"
                  | "Running"
                  | "Complete"
                  | "Failed"
                  | "Warning";
                description: string;
                media_id: number;
                additionalInfo: string;
              }[];
              downloadURL?: string | null | undefined;
            };
          },
          unknown
        >;
        create: import("@trpc/server").BuildProcedure<
          "mutation",
          {
            _config: import("@trpc/server").RootConfig<{
              ctx: object;
              meta: object;
              errorShape: import("@trpc/server").DefaultErrorShape;
              transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: {};
            _input_in: {
              sourceType: "Tus" | "GoogleDrive" | "S3";
              source: string;
              fileName: string;
              targetType: "continuityItem" | "rundownItem" | "asset";
              targetID: number;
              process: boolean;
            };
            _input_out: {
              sourceType: "Tus" | "GoogleDrive" | "S3";
              source: string;
              fileName: string;
              targetType: "continuityItem" | "rundownItem" | "asset";
              targetID: number;
              process: boolean;
            };
            _output_in: {
              path: string | null;
              id: number;
              name: string;
              durationSeconds: number;
              state:
                | "Pending"
                | "Processing"
                | "Ready"
                | "ReadyWithWarnings"
                | "ProcessingFailed"
                | "Archived";
              rawPath: string;
            };
            _output_out: {
              path: string | null;
              id: number;
              name: string;
              durationSeconds: number;
              state:
                | "Pending"
                | "Processing"
                | "Ready"
                | "ReadyWithWarnings"
                | "ProcessingFailed"
                | "Archived";
              rawPath: string;
            };
          },
          unknown
        >;
        update: import("@trpc/server").BuildProcedure<
          "mutation",
          {
            _config: import("@trpc/server").RootConfig<{
              ctx: object;
              meta: object;
              errorShape: import("@trpc/server").DefaultErrorShape;
              transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: {};
            _input_in: {
              id: number;
              data: import("@badger/prisma/client").Prisma.MediaUpdateInput;
            };
            _input_out: {
              id: number;
              data: import("@badger/prisma/client").Prisma.MediaUpdateInput;
            };
            _output_in: {
              path: string | null;
              id: number;
              name: string;
              durationSeconds: number;
              state:
                | "Pending"
                | "Processing"
                | "Ready"
                | "ReadyWithWarnings"
                | "ProcessingFailed"
                | "Archived";
              rawPath: string;
            };
            _output_out: {
              path: string | null;
              id: number;
              name: string;
              durationSeconds: number;
              state:
                | "Pending"
                | "Processing"
                | "Ready"
                | "ReadyWithWarnings"
                | "ProcessingFailed"
                | "Archived";
              rawPath: string;
            };
          },
          unknown
        >;
        bulkGet: import("@trpc/server").BuildProcedure<
          "query",
          {
            _config: import("@trpc/server").RootConfig<{
              ctx: object;
              meta: object;
              errorShape: import("@trpc/server").DefaultErrorShape;
              transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: number[];
            _input_out: number[];
            _output_in: {
              path: string | null;
              id: number;
              name: string;
              continuityItems: {
                id: number;
                name: string;
                order: number;
                showId: number;
                durationSeconds: number;
                mediaId: number | null;
                show: {
                  id: number;
                  name: string;
                  start: Date;
                  version: number;
                };
              }[];
              durationSeconds: number;
              state:
                | "Pending"
                | "Processing"
                | "Ready"
                | "ReadyWithWarnings"
                | "ProcessingFailed"
                | "Archived";
              rawPath: string;
              assets: {
                id: number;
                name: string;
                order: number;
                mediaId: number;
                rundownId: number;
                category: string;
                rundown: {
                  id: number;
                  name: string;
                  order: number;
                  showId: number;
                  show: {
                    id: number;
                    name: string;
                    start: Date;
                    version: number;
                  };
                };
              }[];
              rundownItems: {
                type: "Segment" | "VT";
                id: number;
                name: string;
                order: number;
                durationSeconds: number;
                mediaId: number | null;
                rundownId: number;
                notes: string;
                rundown: {
                  id: number;
                  name: string;
                  order: number;
                  showId: number;
                  show: {
                    id: number;
                    name: string;
                    start: Date;
                    version: number;
                  };
                };
              }[];
              tasks: {
                id: number;
                state:
                  | "Pending"
                  | "Running"
                  | "Complete"
                  | "Failed"
                  | "Warning";
                description: string;
                media_id: number;
                additionalInfo: string;
              }[];
            }[];
            _output_out: {
              path: string | null;
              id: number;
              name: string;
              continuityItems: {
                id: number;
                name: string;
                order: number;
                showId: number;
                durationSeconds: number;
                mediaId: number | null;
                show: {
                  id: number;
                  name: string;
                  start: Date;
                  version: number;
                };
              }[];
              durationSeconds: number;
              state:
                | "Pending"
                | "Processing"
                | "Ready"
                | "ReadyWithWarnings"
                | "ProcessingFailed"
                | "Archived";
              rawPath: string;
              assets: {
                id: number;
                name: string;
                order: number;
                mediaId: number;
                rundownId: number;
                category: string;
                rundown: {
                  id: number;
                  name: string;
                  order: number;
                  showId: number;
                  show: {
                    id: number;
                    name: string;
                    start: Date;
                    version: number;
                  };
                };
              }[];
              rundownItems: {
                type: "Segment" | "VT";
                id: number;
                name: string;
                order: number;
                durationSeconds: number;
                mediaId: number | null;
                rundownId: number;
                notes: string;
                rundown: {
                  id: number;
                  name: string;
                  order: number;
                  showId: number;
                  show: {
                    id: number;
                    name: string;
                    start: Date;
                    version: number;
                  };
                };
              }[];
              tasks: {
                id: number;
                state:
                  | "Pending"
                  | "Running"
                  | "Complete"
                  | "Failed"
                  | "Warning";
                description: string;
                media_id: number;
                additionalInfo: string;
              }[];
            }[];
          },
          unknown
        >;
      }
    >;
    rundowns: import("@trpc/server").CreateRouterInner<
      import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: typeof import("superjson").default;
      }>,
      {
        get: import("@trpc/server").BuildProcedure<
          "query",
          {
            _config: import("@trpc/server").RootConfig<{
              ctx: object;
              meta: object;
              errorShape: import("@trpc/server").DefaultErrorShape;
              transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
              id: number;
            };
            _input_out: {
              id: number;
            };
            _output_in: {
              id: number;
              name: string;
              order: number;
              showId: number;
              items: {
                type: "Segment" | "VT";
                id: number;
                name: string;
                order: number;
                durationSeconds: number;
                mediaId: number | null;
                media: {
                  path: string | null;
                  id: number;
                  name: string;
                  durationSeconds: number;
                  state:
                    | "Pending"
                    | "Processing"
                    | "Ready"
                    | "ReadyWithWarnings"
                    | "ProcessingFailed"
                    | "Archived";
                  rawPath: string;
                } | null;
                rundownId: number;
                notes: string;
              }[];
              assets: {
                id: number;
                name: string;
                order: number;
                mediaId: number;
                media: {
                  path: string | null;
                  id: number;
                  name: string;
                  durationSeconds: number;
                  state:
                    | "Pending"
                    | "Processing"
                    | "Ready"
                    | "ReadyWithWarnings"
                    | "ProcessingFailed"
                    | "Archived";
                  rawPath: string;
                };
                rundownId: number;
                category: string;
              }[];
            };
            _output_out: {
              id: number;
              name: string;
              order: number;
              showId: number;
              items: {
                type: "Segment" | "VT";
                id: number;
                name: string;
                order: number;
                durationSeconds: number;
                mediaId: number | null;
                media: {
                  path: string | null;
                  id: number;
                  name: string;
                  durationSeconds: number;
                  state:
                    | "Pending"
                    | "Processing"
                    | "Ready"
                    | "ReadyWithWarnings"
                    | "ProcessingFailed"
                    | "Archived";
                  rawPath: string;
                } | null;
                rundownId: number;
                notes: string;
              }[];
              assets: {
                id: number;
                name: string;
                order: number;
                mediaId: number;
                media: {
                  path: string | null;
                  id: number;
                  name: string;
                  durationSeconds: number;
                  state:
                    | "Pending"
                    | "Processing"
                    | "Ready"
                    | "ReadyWithWarnings"
                    | "ProcessingFailed"
                    | "Archived";
                  rawPath: string;
                };
                rundownId: number;
                category: string;
              }[];
            };
          },
          unknown
        >;
      }
    >;
    metaFields: import("@trpc/server").CreateRouterInner<
      import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: typeof import("superjson").default;
      }>,
      {
        put: import("@trpc/server").BuildProcedure<
          "mutation",
          {
            _config: import("@trpc/server").RootConfig<{
              ctx: object;
              meta: object;
              errorShape: import("@trpc/server").DefaultErrorShape;
              transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: {};
            _input_in: import("@badger/prisma/client").Prisma.MetadataFieldCreateInput[];
            _input_out: import("@badger/prisma/client").Prisma.MetadataFieldCreateInput[];
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
          },
          void
        >;
      }
    >;
  }
>;
export type API = typeof appRouter;
