import React from "react";

const Docs = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;
  return (
    <div>
      {slug?.length === 2 ? (
        <h2>
          docs with {slug[0]} and {slug[1]}
        </h2>
      ) : slug?.length === 1 ? (
        <h2>docs with {slug[0]}</h2>
      ) : (
        <h2>Docs</h2>
      )}
    </div>
  );
};

export default Docs;
