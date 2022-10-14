
const engQuote = document.getElementById('quote-reveal')
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

window.addEventListener('load', draw)




let vertices=[];
vertices.push({x:618, y:28});
vertices.push({x:800, y:28});
vertices.push({x:800, y:130});
vertices.push({x:180, y:130});
vertices.push({x:180, y:90});
vertices.push({x:200, y:90});


function calcWaypoints(vertices){
    let waypoints=[];
    for(let i=1; i<vertices.length; i++){
        let pt0=vertices[i-1];
        let pt1=vertices[i];
        let dx=pt1.x-pt0.x;
        let dy=pt1.y-pt0.y;
        if (dx < 0){
            for(let j=1; j < 800; j++){
            let x=pt0.x+dx*j/800;
            let y=pt0.y+dy*j/800;
            waypoints.push({x:x,y:y});
        }}
        else{for(let j=1; j < 300; j++){
            let x=pt0.x+dx*j/300;
            let y=pt0.y+dy*j/300;
            waypoints.push({x:x,y:y});
        }}
    }
    return(waypoints);
}

let points=calcWaypoints(vertices);

let t = 1;

draw();

function draw(){
    if(t < points.length-1){ requestAnimationFrame(draw); }
 
    ctx.strokeStyle = "#fff"
    ctx.beginPath();
    ctx.moveTo(points[t-1].x, points[t-1].y);
    ctx.lineTo(points[t].x, points[t].y);
    ctx.stroke();
    t++;
}


// function draw() {
//    c.beginPath()
//    c.moveTo(618, 28)
//    c.lineTo(800, 28)
//    c.lineTo(800, 130)
//    c.lineTo(180, 130)
//    c.lineTo(180, 90)
//    c.lineTo(200, 90)




  




//    c.stroke()

// }

