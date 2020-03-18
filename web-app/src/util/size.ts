
export function getWindowSize(window: Window){
  const width = (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  );

  const height = (
    window.innerHeight ||
    document.documentElement.clientHeight||
    document.body.clientHeight
  );

  console.log(width, height);

  return (
    {
      width: width,
      height: height,
    }
  )
}
