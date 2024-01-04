import { render, screen, cleanup } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";

import Tiles from "../../components/Tiles";

afterEach(() => cleanup());

test('Tiles component has 5 tiles', () => {
    render(<Tiles />);

    const tileComponents = screen.getAllByTestId(/tile_button/i);
    expect(tileComponents.length).toBe(5);
});

test('When tile is clicked, border color changes from red-300 to white', () => {
    render(<Tiles />);

    const tileComponent = screen.getByTestId(/tile_button_2/i);

    expect(tileComponent).toHaveClass('border-red-300');
    fireEvent.click(tileComponent);
    expect(tileComponent).toHaveClass('border-white');
});

test('When keyDown is upper letter, tile content updates to letter pressed', () => {
    render(<Tiles />);

    const tileComponent = screen.getByTestId(/tile_button_2/i);

    fireEvent.click(tileComponent);
    fireEvent.keyDown(tileComponent, { 'key': 'A'});
    expect(tileComponent).toHaveTextContent('A');
});

test('When keyDown is lower letter, tile content updates to upper letter pressed', () => {
    render(<Tiles />);

    const tileComponent = screen.getByTestId(/tile_button_2/i);

    fireEvent.click(tileComponent);
    fireEvent.keyDown(tileComponent, { 'key': 'a'});
    expect(tileComponent).toHaveTextContent('A');
});

test('When keyDown is Backspace, tile content is cleaned', () => {
    render(<Tiles />);

    const tileComponent = screen.getByTestId(/tile_button_2/i);

    fireEvent.click(tileComponent);
    fireEvent.keyDown(tileComponent, { 'key': 'Backspace'});
    expect(tileComponent).toHaveTextContent('');
});

test('When third tile is active and keyDown is ArrowLeft, second tile will become active', () => {
    render(<Tiles />);

    const thirdTileComponent = screen.getByTestId(/tile_button_2/i);
    const secondTileComponent = screen.getByTestId(/tile_button_1/i);

    fireEvent.click(thirdTileComponent);
    fireEvent.keyDown(thirdTileComponent, { 'key': 'ArrowLeft'});
    expect(secondTileComponent).toHaveClass('border-white');
});

test('When first tile is active and keyDown is ArrowLeft, last tile will become active', () => {
    render(<Tiles />);

    const firstTileComponent = screen.getByTestId(/tile_button_0/i);
    const lastTileComponent = screen.getByTestId(/tile_button_4/i);

    fireEvent.click(firstTileComponent);
    fireEvent.keyDown(firstTileComponent, { 'key': 'ArrowLeft' });
    expect(lastTileComponent).toHaveClass('border-white');
});

test('When third tile is active and keyDown is ArrowRight, fourth tile will become active', () => {
    render(<Tiles />);

    const thirdTileComponent = screen.getByTestId(/tile_button_2/i);
    const fourthTileComponent = screen.getByTestId(/tile_button_3/i);

    fireEvent.click(thirdTileComponent);
    fireEvent.keyDown(thirdTileComponent, { 'key': 'ArrowRight'});
    expect(fourthTileComponent).toHaveClass('border-white');
});

test('When last tile is active and keyDown is ArrowRight, first tile will become active', () => {
    render(<Tiles />);

    const firstTileComponent = screen.getByTestId(/tile_button_0/i);
    const lastTileComponent = screen.getByTestId(/tile_button_4/i);

    fireEvent.click(lastTileComponent);
    fireEvent.keyDown(lastTileComponent, { 'key': 'ArrowRight' });
    expect(firstTileComponent).toHaveClass('border-white');
});

test('When keyDown is NOT a letter nor arrows or backspace, active tile don\'t change neither the content', () => {
    render(<Tiles />);

    const secondTileComponent = screen.getByTestId(/tile_button_1/i);

    fireEvent.click(secondTileComponent);
    fireEvent.keyDown(secondTileComponent, { 'key': 'A' });
    fireEvent.keyDown(secondTileComponent, { 'key': 'Alt' });

    expect(secondTileComponent).toHaveClass('border-white');
    expect(secondTileComponent).toHaveTextContent('A');
});
