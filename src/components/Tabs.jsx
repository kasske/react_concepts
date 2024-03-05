export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
    /* custom type component == menu */
    /* if built in tag use it as a string "menu", or {Section}, if it is custom component */
    /* it must start with capital or remap with constant */
    /*  = menu is default type */
    // const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>
        {buttons}
      </ButtonsContainer>
      {children}
    </>
  );
}
