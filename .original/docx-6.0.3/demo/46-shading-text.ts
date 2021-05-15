// Shading text
// Import from 'docx' rather than '../build' if you install from npm
import * as fs from "fs";
import { AlignmentType, Document, Header, Packer, Paragraph, ShadingType, TextRun } from "../build";

const doc = new Document({
    sections: [
        {
            headers: {
                default: new Header({
                    children: [
                        new Paragraph({
                            alignment: AlignmentType.RIGHT,
                            children: [
                                new TextRun({
                                    text: "Hello World",
                                    color: "red",
                                    bold: true,
                                    size: 24,
                                    font: {
                                        name: "Garamond",
                                    },
                                    shading: {
                                        type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                                        color: "00FFFF",
                                        fill: "FF0000",
                                    },
                                }),
                            ],
                        }),
                        new Paragraph({
                            shading: {
                                type: ShadingType.DIAGONAL_CROSS,
                                color: "00FFFF",
                                fill: "FF0000",
                            },
                            children: [
                                new TextRun({
                                    text: "Hello World for entire paragraph",
                                }),
                            ],
                        }),
                    ],
                }),
            },
            children: [
                new Paragraph({
                    children: [
                        new TextRun({
                            emboss: true,
                            text: "Embossed text - hello world",
                        }),
                        new TextRun({
                            imprint: true,
                            text: "Imprinted text - hello world",
                        }),
                    ],
                }),
            ],
        },
    ],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("My Document.docx", buffer);
});
