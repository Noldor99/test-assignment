import Loader from "../UI/Loader/Loader";
import FileUpload from "./FileUpload/FileUpload";
import InputList from "./InputList";
import PositionsList from "./PositionsList";
import styles from './Form.module.sass'
import MyButton from "../UI/MyButton/MyButton";
import Confetti from '../UI/Confetti'
import {useOnSubmit} from '../../hooks/useOnSubmit'

const Form = ({methods}:any) => {
 
  const [valid, onSubmit, isLoading, confetti] = useOnSubmit()

  return (
    <>    
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <h2 id='post__request' className={styles.form__title}>Working with POST request</h2>
      <div className={styles.form__container}>
        <InputList/>
        <PositionsList/>
        <FileUpload/>
        <div className={styles.form__btn}>
          {isLoading ? <Loader/>
          : <MyButton>Sign up</MyButton> 
          }
        </div>
      </div>
    </form>
    {valid && 
      <div>
        <h2 className={styles.form__title}>User successfully registered</h2>
        <div className={styles.form__success}>
        {confetti && <Confetti/>}
          <img src="./image/success-image.svg" alt="nosing" />
        </div>
    </div>
    }
    </>
  );
};

export default Form; 
