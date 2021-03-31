import { render, screen } from '@testing-library/react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

test('header test', () => {
    render(<Header />);
    const headerElement = screen.getByText(/Home/i);
    expect(headerElement).toBeInTheDocument();
});

test('Main content test',()=>{
    render(<Main/>);
    const taskElement = screen.getByText(/First Task/i);
    expect(taskElement).toBeInTheDocument();
})

test('Footer test',()=>{
    render(<Footer/>);
    const footerElement = screen.getByText(/Author: Ramesh Sutaliya/i);
    expect(footerElement).toBeInTheDocument();
})