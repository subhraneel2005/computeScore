function extractLines(jobDetails: string) {
  const jobLines = jobDetails
    .split(/[.,;\n]/)
    .map((line) => line.trim())
    .filter(Boolean);

  return jobLines;
}

export { extractLines };
