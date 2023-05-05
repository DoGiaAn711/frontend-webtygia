import { useState, useRef, useEffect } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';

import Link from 'next/link';
import MainLayout from '@components/layouts/mainLayout';
import axios from 'axios';
import { useUser } from '@services/user/useUser';
import { useRouter } from 'next/router';
import Loading from '@components/UI/Loading';

const ReactQuill = dynamic(import('react-quill'), { ssr: false });

const modules = {
	toolbar: [
		['bold', 'italic', 'underline', 'strike'],
		['blockquote', 'code-block'],
		[{ header: 1 }, { header: 2 }],
		[{ list: 'ordered' }, { list: 'bullet' }],
		[{ script: 'sub' }, { script: 'super' }],
		[{ indent: '-1' }, { indent: '+1' }],
		[{ size: ['small', false, 'large', 'huge'] }],
		[{ header: [1, 2, 3, 4, 5, 6, false] }],
		[{ color: [] }, { background: [] }],
		[{ font: [] }],
		[{ align: [] }],
		['link', 'image'],
		['clean'],
	],
};

const formats = [
	'bold',
	'italic',
	'underline',
	'strike',
	'blockquote',
	'code-block',
	'header',
	'list',
	'indent',
	'script',
	'size',
	'color',
	'background',
	'font',
	'align',
	'link',
	'image',
];

function CreateNewsView() {
	const [email, setEmail] = useState();
	const [isAdmin, setIsAdmin] = useState(false);
	const [title, setTitle] = useState('');

	const [description, setDescription] = useState('');
	const [keyword, setKeyword] = useState('');
	const [originSource, setOriginSource] = useState('');
	const [quotation, setQuotation] = useState('');
	const [category, setCategory] = useState('');
	const [tag, setTag] = useState('');
	const [nameAdminPost, setNameAdminPost] = useState();
	const [avatarAdminPost, setAvatarAdminPost] = useState();

	const [selectedFile, setSelectedFile] = useState();
	const [image, setImage] = useState();
	const [content, setContent] = useState('');

	const [status, setStatus] = useState('idle'); // idle, loading, succeeded, failed

	const selectedFileRef = useRef();
	const router = useRouter();

	const { data: userFromDb } = useUser(email);

	useEffect(() => {
		// const role = localStorage.getItem('role');
		// if (role !== 'admin') {
		// 	router.back();
		// } else {
		// 	setIsAdmin(true);
		// }
		if (userFromDb && userFromDb?.role !== 'admin') {
			router.back();
		}
		if (userFromDb && userFromDb?.role === 'admin') {
			setIsAdmin(true);
		}
		if (typeof window !== 'undefined') {
			setAvatarAdminPost(localStorage.getItem('avatar'));
			setNameAdminPost(localStorage.getItem('name'));
		}
	}, [typeof window, userFromDb]);

	// const { data, isLoading, isError, error, isFetching } =
	// 	useUser();

	const createBlog = async () => {
		if (title.trim() === '' || content.trim() === '') {
			// toastRef.current.handleToastAction('error', "Không được bỏ trống!");

			//handle error
			return;
		}

		setStatus('loading');

		try {
			const timeUpdate = Math.floor(Date.now() / 1000);

			let data = new FormData();

			data.append('title', title);
			data.append('image', image);
			data.append('description', description);
			keyword &&
				keyword
					.split(',')
					.forEach((item) => data.append('keyword[]', item));
			originSource && data.append('originSource', originSource);
			quotation && data.append('quotation', quotation);
			category &&
				category
					.split(',')
					.forEach((item) => data.append('category[]', item));
			tag && tag.split(',').forEach((item) => data.append('tag[]', item));
			data.append('nameAdminPost', nameAdminPost);
			data.append('avatarAdminPost', avatarAdminPost);
			data.append('timeUpdate', timeUpdate);
			data.append('content', content);

			axios({
				method: 'post',
				url: `${process.env.NEXT_PUBLIC_PRODUCT_URL}/create-news`,
				data: data,
				headers: { 'Content-Type': 'multipart/form-data' },
			})
				.then(async function (response) {
					//handle success
					console.log(response);
					setStatus('succeeded');
					// setTitle('');
					// setDescription('')
					// setSelectedFile(null);
					// selectedFileRef.current.value = '';
					// setImage(null);
					// setContent('');
					const delay = (m) => new Promise((r) => setTimeout(r, m));
					await delay(3000);
					setStatus('idle');
				})
				.catch(async function (response) {
					//handle error
					setStatus('failed');
					const delay = (m) => new Promise((r) => setTimeout(r, m));
					await delay(3000);
					setStatus('idle');
					// console.log(response);
					return;
				});
		} catch (err) {
			console.log(err);

			// setMsg(err.message);
			setStatus('failed');
			const delay = (m) => new Promise((r) => setTimeout(r, m));
			await delay(3000);
			setStatus('idle');
		}
	};

	const handleImage = (e) => {
		const reader = new FileReader();
		if (e.target.files[0]) {
			setImage(e.target.files[0]);
			reader.readAsDataURL(e.target.files[0]);
		}

		reader.onload = (readerEvent) => {
			setSelectedFile(readerEvent.target.result);
		};
	};

	return (
		//image, title,timestamps
		<MainLayout>
			{isAdmin && (
				<div className="mt-16 max-w-[1440px] mx-auto px-[1rem]">
					<h3 className="pt-8 pb-4 text-2xl font-bold">
						Tiêu đề Blog:
					</h3>
					<input
						className="border border-black/20 h-12 w-full px-2 text-lg outline-none"
						type="text"
						value={title}
						placeholder="Nhập tiêu đề..."
						onChange={(e) => setTitle(e.target.value)}
					/>
					<h3 className="pt-8 pb-4 text-2xl font-bold">
						Ảnh bài viết:
					</h3>
					<input
						className="border border-black/20 h-12 w-full px-2 text-lg outline-none"
						type="file"
						// value={image}
						ref={selectedFileRef}
						onChange={handleImage}
					/>
					<h3 className="pt-8 pb-4 text-2xl font-bold">Mô tả:</h3>
					<input
						className="border border-black/20 h-12 w-full px-2 text-lg outline-none"
						type="text"
						value={description}
						placeholder="Nhập mô tả..."
						onChange={(e) => setDescription(e.target.value)}
					/>
					<h3 className="pt-8 pb-4 text-2xl font-bold">Keyword:</h3>
					<input
						className="border border-black/20 h-12 w-full px-2 text-lg outline-none"
						type="text"
						value={keyword}
						placeholder="Có thể có nhiều keyword, ngăn cách nhau bằng dấu ',' ví dụ: giavang, giavangmoinhat"
						onChange={(e) => setKeyword(e.target.value)}
					/>
					<h3 className="pt-8 pb-4 text-2xl font-bold">
						Link bài viết gốc(nếu có):
					</h3>
					<input
						className="border border-black/20 h-12 w-full px-2 text-lg outline-none"
						type="text"
						value={originSource}
						placeholder="Nhập link bài viêt gốc..."
						onChange={(e) => setOriginSource(e.target.value)}
					/>
					<h3 className="pt-8 pb-4 text-2xl font-bold">
						Trích dẫn, tên nguồn, không phải link(nếu có):
					</h3>
					<input
						className="border border-black/20 h-12 w-full px-2 text-lg outline-none"
						type="text"
						value={quotation}
						placeholder="Nhập tên nguồn..."
						onChange={(e) => setQuotation(e.target.value)}
					/>
					<h3 className="pt-8 pb-4 text-2xl font-bold">Thể loại:</h3>
					<input
						className="border border-black/20 h-12 w-full px-2 text-lg outline-none"
						type="text"
						value={category}
						placeholder="Có thể có nhiều thể loại, ngăn cách nhau bằng dấu ',' ví dụ: vàng, cổ phiếu"
						onChange={(e) => setCategory(e.target.value)}
					/>
					<h3 className="pt-8 pb-4 text-2xl font-bold">Tag:</h3>
					<input
						className="border border-black/20 h-12 w-full px-2 text-lg outline-none"
						type="text"
						value={tag}
						placeholder="Có thể có nhiều hastag, ngăn cách nhau bằng dấu ',' ví dụ: #giavang, #giavangsjcmoinhat"
						onChange={(e) => setTag(e.target.value)}
					/>
					<h3 className="mt-8 pb-4 text-2xl font-bold">
						Nội dung Blog:
					</h3>
					<ReactQuill
						theme="snow"
						modules={modules}
						formats={formats}
						placeholder="Nhập văn bản..."
						value={content}
						onChange={setContent}
					/>
					<div className="my-12">
						{status === 'loading' ? (
							<Loading />
						) : (
							<button
								className={` bg-blue-text w-36 h-12 flex-center text-xl font-semibold text-white rounded-md hover:opacity-95 duration-100`}
								onClick={() => {
									// if (status === 'idle') {
									createBlog();
									// 	return;
									// }
								}}
								disabled={`${status !== 'idle' && true}`}
							>
								{/* idle, loading, succeeded, failed */}
								{status === 'idle' && <span>Tạo Blog</span>}
								{status === 'loading' && (
									<span>Loading...</span>
								)}
								{status === 'succeeded' && (
									<span>Tạo thành công</span>
								)}
								{status === 'failed' && (
									<span>Tạo thất bại</span>
								)}
							</button>
						)}
					</div>
					<div className="ql-snow text-[18px]">
						<div
							className="ql-editor link:"
							style={
								{
									// padding: 0,
									// lineHeight: '1.6rem',
									// fontWeight: '300',
								}
							}
						>
							<h1>{title}</h1>
							<div>
								<img src={selectedFile} />
							</div>
							<div
								dangerouslySetInnerHTML={{ __html: content }}
							></div>
						</div>
					</div>
				</div>
			)}
		</MainLayout>
	);
}

export default CreateNewsView;
