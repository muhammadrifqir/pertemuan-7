function Alert(props) {
    //**
    /* children adalah props khusus
    /* berisi konten/children yang ada di dalam component 
    */
   const { children} = props;

   return (
    <div>
      <span>{children}</span>
    </div>
   )
  }
export default Alert;
