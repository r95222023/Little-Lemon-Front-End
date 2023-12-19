// import { render, unmountComponentAtNode } from "react-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Aboutpage from "./Aboutpage";
it('Should have image loaded', ()=>{
    render(
        <Aboutpage/>
    );
    const displayedImage = document.querySelector("img");
    expect(displayedImage.src).toContain("mario-and-adrian");
    // expect(1).toBe(1)
})