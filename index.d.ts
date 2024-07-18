export type EmlDataAttachment = {
  name?: string;
  contentType?: string;
  data?: any;
};

export type EmlDataTo =
  | {
      name?: string;
      email?: string;
    }
  | string;

export type EmlData = {
  from?: string;
  to?: EmlDataTo;
  bcc?: string;
  subject?: string;
  text?: string;
  html?: string;
  attachments?: EmlDataAttachment;
};

declare module "@misa198/eml-format" {
  function read(
    data: string,
    callback: (err: Error, data: string) => void
  ): void;

  function build(
    data: EmlInputData,
    callback: (err: Error, data: string) => void
  ): void;

  function readAsync(eml: string): Promise<EmlData>;
  function buildAsync(data: EmlInputData): Promise<string>;
}
