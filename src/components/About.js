import React from 'react';
import CurlySVG from '../components/CurlySVG.js';
import HomeProducts from '../components/HomeProducts.js';

function useOnScreen(options) {
	const ref = React.useRef();
	const [visible, setVisible] = React.useState(false);

	React.useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			setVisible(entry.isIntersecting);
		}, options);

		if (ref.current) {
			observer.observe(ref.current);
		}
	}, [ref, options]);
	return [ref, visible];
}

export default function About() {
	const [ref, visible] = useOnScreen({ rootMargin: '-1px' });

	return (
		<div className='about' id='about' ref={ref}>
			<h1>About Us</h1>
			<p className='aboutText'>
				小小巷弄裡的幸福小窩，有我們對生活的努力與堅持，
				<br />
				喜歡用手創造喜悅、喜歡用手實現創意，
				<br />
				小窩裡將會有先生的木手作、我的布手作、
				<br />
				過陣子還會加入手作達人的創作，
				<br />
				手作之外，我也從日本帶回一些材料包及素材，
				<br />
				還有一些生活雑貨及擺飾，
				<br />
				歡迎你來小窩，讓我有機會為你奉上一杯咖啡、一焙花茶，
				<br />
				我們一同說生活、話理想，一起玩手作！
				<br />
				雖說中年之後才來圓年輕時候的夢想，似乎有一點兒慢，
				<br />
				卻與我這「慢慢」個性不謀而合， 總是慢慢來的我，
				<br />
				結婚比別人慢、生孩子比別人慢、連圓夢都比別人慢，
				<br />
				沒關係，慢工出細活，
				<br />
				慢中自有一份安靜自在，慢中也體會出生活中的「要」與「不要」，
				<br />
				這是年輕時候的我缺少的悠閒， 雖然眼花了、手不巧了，
				<br />
				心卻自有清明恬適，正適合作手作！ 陸陸續續擺上我們的手作物，
				<br />
				另一個角落有精緻的生活雑貨。 很感恩身邊總有許多貴人的支持，
				<br />
				讓我總是有「繼續努力」的動力， 想起那句話，
				<br />
				當你努力想完成一個夢想時， 全世界都會湧來幫助你！
				<br />
			</p>
			<HomeProducts />
			<CurlySVG duration='1000' visible={visible} />
		</div>
	);
}
