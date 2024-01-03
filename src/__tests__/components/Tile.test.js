import { render, screen, cleanup } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";

import Tile from "../../components/Tile";

afterEach(() => cleanup());

test('when isActive is false, text content is 0 and border is light-red', () => {
    render(<Tile isActive={false}/>);

   const tileButton = screen.getByTestId("tile_button");
   expect(tileButton).toHaveClass('border-red-300');
   expect(tileButton).toHaveTextContent('0');
});

test('when isActive is true, text content is 1 and border is white', () => {
    render(<Tile isActive={true}/>);

   const tileButton = screen.getByTestId("tile_button");
   expect(tileButton).toHaveClass('border-white');
   expect(tileButton).toHaveTextContent('1');
});

test('when button is clicked, trigger buttonClicked event', () => {
    const mockedClicked = jest.fn();

    render(<Tile isActive={false} buttonClicked={mockedClicked}/>);

    const tileButton = screen.getByTestId("tile_button");
    fireEvent.click(tileButton);
    expect(mockedClicked).toHaveBeenCalledTimes(1);
});
