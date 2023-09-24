type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWget = Draggable & Resizable;

let textBox: UIWget = {
    drag: () => { },
    resize: () => {}
}