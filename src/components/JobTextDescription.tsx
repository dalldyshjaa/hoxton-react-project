export function JobTextDescription({ createMarkup }: any) {
  return (
    <div
      dangerouslySetInnerHTML={createMarkup()}
      className="job-description-text"
    />
  );
}
