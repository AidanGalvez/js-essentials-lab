import ReactDOM from 'react-dom'

const Backdrop = () => {
  return <div className="backdrop" />
}

const ModalOverlay = (props) => {
  return (
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
      <button onClick={props.onConfirm}>Okay</button>
    </div>
  );
}

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop></Backdrop>,
        document.getElementById('backdrop-root')
      )}

      {ReactDOM.createPortal(
        <ModalOverlay
          title = {props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default ErrorModal;
