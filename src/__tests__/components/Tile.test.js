import { render, screen, cleanup } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";

import Tile from "../../components/Tile";

afterEach(() => cleanup());

test('tile content is the same as content prop', () => {
    render(<Tile isActive={false} index={0} content="a"/>);

   const tileButton = screen.getByTestId("tile_button_0");
   expect(tileButton).toHaveTextContent('a');
});

test('when isActive is false, border is light-red', () => {
    render(<Tile isActive={false} index={0} content="a"/>);

   const tileButton = screen.getByTestId("tile_button_0");
   expect(tileButton).toHaveClass('border-red-300');
});

test('when isActive is true, border is white', () => {
    render(<Tile isActive={true} index={0} content="a"/>);

   const tileButton = screen.getByTestId("tile_button_0");
   expect(tileButton).toHaveClass('border-white');
});

test('when button is clicked, trigger buttonClicked event', () => {
    const mockedClicked = jest.fn();

    render(<Tile isActive={false} index={0}  content="a" buttonClicked={mockedClicked}/>);

    const tileButton = screen.getByTestId("tile_button_0");
    fireEvent.click(tileButton);
    expect(mockedClicked).toHaveBeenCalledTimes(1);
});

test('when key is pressed, trigger onKeyDown event', () => {
    const mockedKeyDown = jest.fn();

    render(<Tile isActive={false} index={0}  content="a" onKeyDown={mockedKeyDown}/>);

    const tileButton = screen.getByTestId("tile_button_0");
    fireEvent.keyDown(tileButton);
    expect(mockedKeyDown).toHaveBeenCalledTimes(1);
});
