import React from 'react';



function Mountains() {
  return (
    <div className="container">
      <div>
        <p>Here are some possibilties for your favorite spot!</p>
        <button>Snoqulmie</button>
// click event will take you to the location of summit at snoqualmie
        <p></p><button>Mt Baker</button>
        // click event will take you to the location of Mt Baker
        <p></p><button>Mt Hood</button>
        // click event will take you to the location of Mt hood
        <p></p><button>Stevens pass</button>
        // click event will take you to the location of Stevens Pass
      </div>
      {/* <div ref = {this.mapContainer} className = "mapContainer"/> */}
      
      <script>

{/*  
var map = new mapboxgl.Map({
container: 'map',
style: '
mapbox://styles/mapbox/streets-v11',
center: [-121.426, 47.44],
zoom: 13
}); */}
mapboxgl.accessToken = 'pk.eyJ1IjoiYmlnYWlyam9uc29uIiwiYSI6ImNrcnM3MmVtazM0ODUyd2tkdXg5bGJsZ2EifQ.1idatnzmiZ46CAl2KvCWvQ';
</script>
      </div>
  )
}


export default Mountains;