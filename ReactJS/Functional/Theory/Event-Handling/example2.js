export default function Example2() {
  return (
    <Toolbar
      onPlayMusic={() => alert("Playing!")}
      onUploadImage={() => alert("Uploading!")}
    />
  );
}

function Toolbar(props) {
  return (
    <div>
      <button onClick={props.onPlayMusic}>Play Music</button>
      <button onClick={props.onUploadImage}>Upload Image</button>
    </div>
  );
}