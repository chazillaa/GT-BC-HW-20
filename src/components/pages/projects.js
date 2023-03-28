import React from 'react';

export default function Projects() {
    return (
        <div>
            <h2 className="text-center nes-text is-success m-4">Projects</h2>
                <div className="row m-1">

                    <div className="col m-1">
                        <div className="col nes-container is-rounded">
                            <div>
                                <h3 className="text-center"><a href="https://chazillaa.github.io/Open-Bookings/">Open Bookings</a></h3>
                            </div>
                            <div>
                                <a href="https://chazillaa.github.io/Open-Bookings/"><img src={require("../images/open-bookings.png")}width="100%"/></a>
                            </div>
                        </div>
                    </div>

                    <div className="col m-1">
                        <div className="col nes-container is-rounded">
                            <div>
                                <h3 className="text-center"><a href="https://chazillaa.github.io/GT-BC-HW-03/">Password Generator</a></h3>
                                
                            </div>
                            <div>
                                <a href="https://chazillaa.github.io/GT-BC-HW-03/"><img src={require("../images/password-generator.png")}width="100%"/></a>
                            </div>
                        </div>
                    </div>

                    <div className="col m-1">
                        <div className="col nes-container is-rounded">
                            <div>
                                <h3 className="text-center"><a href="https://nottingham.herokuapp.com/">Nottingham</a></h3>
                            </div>
                            <div>
                                <a href="https://nottingham.herokuapp.com/"><img src={require("../images/nottingham.png")}width="100%"/></a>
                            </div>
                        </div>
                    </div>

                    <div className="col m-1">
                        <div className="col nes-container is-rounded">
                            <div>
                                <h3 className="text-center"><a href="https://chazillaa.github.io/GT-BC-HW-04">Java Quiz</a></h3>
                            </div>
                            <div>
                                <a href="https://chazillaa.github.io/GT-BC-HW-04"><img src={require("../images/java-quiz.png")}width="100%"/></a>
                            </div>
                        </div>
                    </div>

                    <div className="col m-1">
                        <div className="col nes-container is-rounded">
                            <div>
                                <h3 className="text-center"><a href="https://note-taker-gt-bc-11.herokuapp.com/">Note Taker</a></h3>
                            </div>
                            <div>
                                <a href="https://note-taker-gt-bc-11.herokuapp.com/"><img src={require("../images/note-taker.png")}width="100%"/></a>
                            </div>
                        </div>
                    </div>

                </div>

        </div>

    
      
      
        
     
    )
  }