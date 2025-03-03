// src/app/[type]/page.js

import fs from "fs";
import Link from "next/link";
import path from "path";

export default function TypePage({ params }) {
  const { type } = params;
  const directoryPath = path.join(process.cwd(), "public", type);
  let files = [];

  try {
    files = fs.readdirSync(directoryPath);
  } catch (error) {
    console.error(`Error reading directory ${directoryPath}:`, error);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="mb-2">Files in '{type}' Directory</h1>
      <ul>
        {files.length > 0 ? (
          files.map((file) => (
            <li key={file} style={{ marginBottom: "5px" }}>
              <Link
                href={`${type}/${file}`}
                style={{
                  textDecoration: "none",
                  color: "blue",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                / {file}
              </Link>
            </li>
          ))
        ) : (
          <p>No files found in this directory.</p>
        )}
      </ul>
    </div>
  );
}
