import fs from "fs";
import Link from "next/link";
import path from "path";

export default function Home() {
  const publicPath = path.join(process.cwd(), "public");
  let folders = [];

  try {
    folders = fs
      .readdirSync(publicPath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);
  } catch (error) {
    console.error("Error reading public folder:", error);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="mb-2">Public Folders</h1>
      <ul>
        {folders.length > 0 ? (
          folders.map((folder) => (
            <li key={folder} style={{ marginBottom: "5px" }}>
              <Link
                href={`/${folder}`}
                style={{
                  textDecoration: "none",
                  color: "blue",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                / {folder}
              </Link>
            </li>
          ))
        ) : (
          <p>No folders found.</p>
        )}
      </ul>
    </div>
  );
}
