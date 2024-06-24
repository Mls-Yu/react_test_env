import './TopPage.css';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import Link from '../components/Link';
import  {motion}  from 'framer-motion'

const TopPage = () => {
    return(
        <div className='TopPage'>
            <Header/>

            <motion.div
            className='menu'
            initial={{ opacity: 0, x: -100, y: 120 }} 
            animate={{ opacity: 1, x: 0, y: 120 }} 
            transition={{ type: 'spring', stiffness: 100, duration: 1.5 }}
            >
                <MenuBar/>
            </motion.div>
            <div className='Link'>
                <Link/>
            </div>
            <div className='belt'></div>
            <div className='belt belt2'></div>
            
        </div>
        
    )

}

export default TopPage