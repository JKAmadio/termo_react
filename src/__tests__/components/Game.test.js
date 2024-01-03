import { render } from "@testing-library/react";
import Game from "../../components/Game";

test('verifica se componente está sendo renderizado', () => {
    render(<Game/>);
});
