mustY = 0
mustX=0

function preload(){
mustache = loadImage("must.png")
}

function setup(){
    canvas = createCanvas(400,400)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide() 
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on("post",gotResults)
    
    }
    
    function draw(){
     image(video,0,0, 400,400)
     image(mustache , mustX,mustY, 30,30)
    }
    
    function takeSnapshot(){
    save("filter.png")
    
    }
    
    function modelLoaded(){
        console.log("the model has loaded")
    }
    
    function gotResults(results){
        if(results.length() > 0){
        console.log(results)
        mustX = results[0].pose.nose.x
        mustY = results[0].pose.nose.y
        }
    }