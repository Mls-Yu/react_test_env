import {useState} from 'react';
import  {motion}  from 'framer-motion';
import recentJson from '../data/recent.json';


const MenuBar = (props) => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
        console.log(index + '番のタブをクリックした！');
    }

    const [galleryNum, setGalleryNum] = useState(1);
    const galleryLength = 5;
    const ChangeGalleryNum = (changeAmount) => {
        setGalleryNum((galleryNum + changeAmount + galleryLength) % galleryLength)
    }
    const settingPhoto = './images/food/' + galleryNum + '.png';

    var hiddenFlag = true;
    window.onload = () => {
        console.log(recentJson);
        setTimeout(() => { hiddenFlag = false }, 2000);
    }

    /* 読み込み後 左下のキャラクターをクリックで出現 */
    const welcomeMessage = () => {
        if ( hiddenFlag ) { return; }

        const name = prompt('隠し要素 : なまえを教えてね(ひらがなで)');

        if (name === null) {
            return; 
        } else if (name === '') {
            alert('ゲストさん うぇるか～む');
            return;
        }
        
        /* インジェクション対策 */
        const checkName = name.match(/^[ぁ-んー　 ]*$/);
        console.log(checkName);

        if (checkName) {
            alert(name + ' さん うぇるか～む');
        } else {
            alert('ひらがなでにゅうりょくしてね！');
        }
        
        return;
    }
    
    return(
        <div>
            <motion.div
            className='container'
            >
                <div className='tab-block'>
                    <div className={toggleState === 1 ? 'tab active-tab' : 'tab'} onClick={() => toggleTab(1) }>
                        サイトについて
                    </div>
                    <div className={toggleState === 2 ? 'tab active-tab' : 'tab'} onClick={() => toggleTab(2)}>
                        基本情報
                    </div>
                    <div className={toggleState === 3 ? 'tab active-tab' : 'tab'} onClick={() => toggleTab(3)}>
                        趣味
                    </div>
                    <div className={toggleState === 4 ? 'tab active-tab' : 'tab'} onClick={() => toggleTab(4)}>
                        最近
                    </div>
                    <div className={toggleState === 5 ? 'tab active-tab' : 'tab'} onClick={() => toggleTab(5)}>
                        ギャラリー
                    </div>
                    <div className='yuruchara'>
                        <img src='images/welcome.png' width='250px' height='160px' alt='welcome' onClick={() => welcomeMessage()}/>
                    </div>
                </div>
            </motion.div>
            
            <motion.div
            className='content-tab'
            initial={{ opacity: 0, x: 0, y: -120 }} 
            animate={{ opacity: 1, x: 0, y: 0, rotate: [-30, 0]}} 
            transition={{ type: 'spring', stiffness: 100, duration: 5}}

            >
                <div className={toggleState === 1 ? 'content active-content' : 'content'}>
                    <motion.h1
                    initial={{ opacity: 0.2, x: -20}} 
                    animate={{ opacity: 1, x: 0}} 
                    transition={{ type: 'spring', delay: 0.1}}
                    >
                    ようこそ！
                    </motion.h1>
                    <motion.div 
                    className='maintxt'
                    initial={{ opacity: 0, x: 0, y: 50 }} 
                    animate={{ opacity: 1, x: 0, y: 0 }} 
                    transition={{ type: 'spring', delay: 0.7}}
                    >
                        <p>Mrs.Yuの自己紹介ホームページです!</p>
                        <p>左のタブから見たい項目をクリックしてね！</p>
                        <p>現在見ているタブの文字は<span className='redShift'>赤く</span>なるよ！</p>
                    </motion.div>
                </div>
                <div className={toggleState === 2 ? 'content active-content' : 'content'}>
                    <h1>基本情報！</h1>
                    <div className='maintxt'>
                        <p>ハンドルネーム : Mrs.Yu</p>
                        <p>現在 : 大学生</p>
                        <p>好きなもの : 音楽, ゲーム</p>
                        <p>最近の予定 : 旅行</p>
                    </div>
                </div>
                <div className={toggleState === 3 ? 'content active-content' : 'content'}>
                    <h1>趣味！</h1>
                    <div className='maintxt'>
                        <p>音楽鑑賞 : 特にケルト系</p>
                        <p>ゲーム : RPGが多め</p>
                        <p>デジタルイラスト : 試行錯誤が好き</p>
                    </div>
                </div>
                <div className={toggleState === 4 ? 'content active-content' : 'content'}>
                    <h1>近況！</h1>
                    <div className='maintxt'>
                        <p>今週のできごと ▶ {recentJson.pastWeek}!</p>
                        <p>今月のできごと ▶ {recentJson.pastMonth}!</p>
                        <p>今年のできごと ▶ {recentJson.pastYear}!</p>
                        <p>やりたいこと　 ▶ {recentJson.wantDo}!</p>
                    </div>
                </div>
                <div className={toggleState === 5 ? 'content active-content' : 'content'}>
                    <h1>ギャラリー!</h1>
                    <div className='maintxt'>
                        <p>最近食べたものの写真！</p>
                    </div>
                    <div className='gallery'>
                        <div className='shift leftShift' onClick={() => ChangeGalleryNum(-1) }>◀</div>
                        <img src={settingPhoto} alt='食べ物の写真' className='foodPhoto'></img>
                        <div className='shift rightShift' onClick={() => ChangeGalleryNum(1) }>▶</div>
                    </div>
                </div>
            </motion.div>
            
        </div>
    )
}

export default MenuBar;