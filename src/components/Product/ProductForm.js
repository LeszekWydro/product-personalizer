import OptionSize from "../OptionSize/OptionSize"
import OptionColor from "../OptionColor/OptionColor"
import Button from "../Button/Button"
import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types'

const ProductForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            
            <OptionSize sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize}/>

            <OptionColor colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor}/>

            <Button className={styles.button} >
            <span className="fa fa-shopping-cart" />
            </Button>
        </form>
    )
}

ProductForm.propTypes ={
  handleSubmit: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
};

export default ProductForm