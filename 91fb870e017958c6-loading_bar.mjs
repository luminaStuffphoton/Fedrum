export default function myInitializer () {
  return {
  /*  onStart: () => {
      console.log("Loading...");
      console.time("trunk-initializer");
    },*/
    onProgress: ({current, total}) => {
      if (!total) {
      	document.getElementById("progress").textContent="Loading Content: 0%";
      } else {
      	document.getElementById("progress").textContent="Loading Content: " + Math.round((current/total) * 95) + "%";
      }
    },
    onComplete: () => {
      console.log("Loading... done!");
      console.timeEnd("trunk-initializer");
    },
    /*
    onSuccess: (wasm) => {
      console.log("Loading... successful!");
      console.log("WebAssembly: ", wasm);
    },
    onFailure: (error) => {
      console.warn("Loading... failed!", error);
    }*/
  }
};
