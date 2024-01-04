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

    expect(tileComponent).toHaveClass('border-red-300')
    fireEvent.click(tileComponent);
    expect(tileComponent).toHaveClass('border-white')
});


