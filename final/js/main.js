  let data = {
    imageURLs: [
        "https://cs3110matthewharris.s3.us-east-2.amazonaws.com/assignment3/images/jupiter.jpg", 
        "https://cs3110matthewharris.s3.us-east-2.amazonaws.com/assignment3/images/mars.jpg",
        "https://cs3110matthewharris.s3.us-east-2.amazonaws.com/assignment3/images/mercury.jpg",
        "https://cs3110matthewharris.s3.us-east-2.amazonaws.com/assignment3/images/neptune.jpg",
        "https://cs3110matthewharris.s3.us-east-2.amazonaws.com/assignment3/images/saturn.jpg",
        "https://cs3110matthewharris.s3.us-east-2.amazonaws.com/assignment3/images/uranus.jpg"
    ],
    captions: [
        "Jupiter",
        "Mars",
        "Mercury",
        "Neptune",
        "Saturn",
        "Uranus"
    ],
    descriptions: [
        "Jupiter is the fifth planet from the Sun and the largest in the Solar System. Jupiter has more than double the mass of all the other planets combined.  It's also super red.",
        "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury.  There have been more missions to Mars than any other planet.",
        "Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes 87.97 Earth days; Mercury’s craters are named after famous artists, musicians and authors.",
        "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.",
        "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine times that of Earth.",
        "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the grandfather of Zeus and father of Cronus."
    ]
};

  for(let i = 0; i < 6; i++) {
    document.getElementById("col").innerHTML += "<div class='col-md-4'>" +
                                                "<div class='card mb-4 shadow-sm'>" + 
                                                "<img src='"+data.imageURLs[i]+"' style='height:320px'>" +
                                                  "<div class='card-body'>" +
                                                    "<p>"+data.captions[i]+"</p>" + 
                                                    "<p class='card-text'>"+ data.descriptions[i] +"</p>" + 
                                                    "<div class='d-flex justify-content-between align-items-center'>" + 
                                                      "<div class='btn-group'>" + 
                                                        "<button type='button' class='btn btn-sm btn-outline-secondary'>View</button>" + 
                                                        "<button type='button' class='btn btn-sm btn-outline-secondary'>Edit</button>" + 
                                                      "</div>" + 
                                                      "<small class='text-muted'>9 mins</small>" + 
                                                    "</div>" + 
                                                  "</div>" + 
                                                "</div>" +
                                                "</div>";


  }