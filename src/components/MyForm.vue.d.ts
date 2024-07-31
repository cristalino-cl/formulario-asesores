declare const _default: import("vue").DefineComponent<{}, {
    form: {
        deviceType: string;
        deviceModel: string;
        operatingSystem: string;
        appVersion: string;
        incidentDate: string;
        problemDescription: string;
        reproduccionSteps: string;
        expectedBehavior: string;
        actualBehavior: string;
        severityLevel: string;
        hasPreviouslyOccurred: string;
        additionalComments: string;
        screenshots: {
            readonly lastModified: number;
            readonly name: string;
            readonly webkitRelativePath: string;
            readonly size: number;
            readonly type: string;
            arrayBuffer: () => Promise<ArrayBuffer>;
            slice: (start?: number, end?: number, contentType?: string) => Blob;
            stream: () => ReadableStream<Uint8Array>;
            text: () => Promise<string>;
        }[];
    };
    handleFileUpload: (event: Event) => void;
    handleSubmit: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
export default _default;
