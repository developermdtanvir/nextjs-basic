const Modal = () => {

    return (
        <dialog id="manageProduct" className="modal">
            <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <input type="text" name="title" id="title" className="input" />
                <input type="number" name="price" id="price" className="input" />
                <input type="submit" value="submit" />
            </form>
        </dialog>
    )
}

export default Modal