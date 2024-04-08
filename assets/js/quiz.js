const CHECK_ANSWER_EVENT = 'CHECK_ANSWER'
const RENDER_QUESTION_EVENT = 'RENDER_QUESTION'
const CLICK_ANSWER_EVENT = 'CLICK_ANSWER'
const RENDER_EXPLANATION_EVENT = 'RENDER_EXPLANATION'
const CURRENT_QUESTION_KEY = 'CURRENT_QUESTION'
const CORRECT_ANSWER_KEY = 'CORRECT_ANSWER'
const WRONG_ANSWER_KEY = 'WRONG_ANSWER'
const TOTAL_QUESTIONS_KEY = 'TOTAL_QUESTIONS'
const USERNAME_SESSION_KEY = 'USERNAME'

const db = [
	{
		text: 'Apa itu diabetes melitus?',
		answers: [
			'Kekurangan sel merah',
			'Terlalu banyak kadar gula dalam darah',
			'Banyaknya lemak dalam tubuh',
			'Keadaan saat susah bernapas'
		],
		correctAnswer: 'Terlalu banyak kadar gula dalam darah',
		explanation: `Diabetes meletus atau biasa disebut kencing manis adalah penyakit jangka panjang yang perlu diwaspadai. Diabetes melitus ini terjadi ketika tubuh pengidapnya tidak lagi mampu mengambil gula (glukosa) ke dalam sel dan menggunakannya sebagai energi dan Kondisi ini pada akhirnya menghasilkan penumpukan gula ekstra dalam aliran darah tubuh kita. Yang terbukti dengan seseorang yang terkena diabetes Melitus yaitu 
			<ol type="1" class="mb-3 mt-3 ps-5 space-y-2 list-decimal list-outside"> 
				<li>Menunjukkan gejala DM + kadar gula darah sewaktu > 200gr/dl</li> 
				<li>Menunjukkan gejala DM + kadar gula darah puasa > 126 gr/dl</li>
			</ol>			
			Penyakit diabetes yang tidak terkontrol dengan baik dapat menyebabkan kerusakan pada berbagai organ dan jaringan tubuh.
			Contohnya organ seperti jantung, ginjal, mata, dan saraf.`,
		image: ''
	},
	{
		text: 'Apa perbedaan diabetes melitus tipe 1 dan diabetes melitus tipe 2 jika dilihat dari insulinnya?',
		answers: [
			'Tipe 1 : Insulin tidak dibuat, <br>tipe 2 : Insulin dibuat tapi tidak cukup',
			'Tipe 1 : Insulin dibuat tapi tidak cukup, <br>tipe 2 : Insulin tidak dibuat',
			'Tipe 1 dan Tipe 2 : Insulin tidak dibuat',
			'Tipe 1 dan Tipe 2 : Insulin dibuat tapi tidak cukup'
		],
		correctAnswer:
			'Tipe 1 : Insulin tidak dibuat, <br>tipe 2 : Insulin dibuat tapi tidak cukup',
		explanation: `Insulin adalah hormon yang membantu mengendalikan kadar gula darah dalam tubuh.
		Gula darah dalam tubuh memiliki fungsi utama yaitu sebagai sumber energi agar kita bisa bergerak.<br>
		<ul class="mb-3 mt-3 ps-5 space-y-2 list-outside list-disc">
			<li>
				Pada Diabetes melitus tipe 1 :<br>
				Hormon insulin tidak diproduksi di pankreas karena sel-selnya telah rusak
			</li>
			<li>
				Pada Diabetes melitus tipe 2 :<br>
				Hormon insulin diproduksi tapi tidak cukup untuk memenuhi kebutuhan insulin yang diperlukan
			</li>
		</ul>
		`,
		image: ''
	},
	{
		text: `Perhatikan pernyataan dibawah ini untuk menjawab pertanyaan
		<ol class="mb-3 mt-3 ps-5 space-y-2 list-decimal list-outside">
			<li>Memperbanyak porsi makan</li>
			<li>Rutin berolahraga</li>
			<li>Melakukan pengecekan gula darah secara rutin</li>
			<li>Banyak minum air teh</li>
			<li>Tidak merokok</li>
		</ol>
		Manakah dari pernyataan diatas yang merupakan pencegahan dari diabetes melitus?`,
		answers: ['1 dan 5', '3 dan 4', '2, 3 dan 4', '2, 3 dan 5'],
		correctAnswer: '2, 3 dan 5',
		explanation: `Cara mencegah Diabetes Melitus
		<ol class="mb-3 mt-3 ps-5 space-y-2 list-decimal list-outside">
			<li>Menjaga berat badan ideal</li>
			<li>Menerapkan pola makan sehat</li>
			<li>Menjaga porsi makan</li>
			<li>Rutin berolahraga</li>
			<li>Tidak merokok</li>
			<li>Banyak minum air putih</li>
			<li>Kelola stress</li>
			<li>Melakukan pengecekan gula darah secara rutin</li>
		</ol>`,
		image: ''
	},
	{
		text: 'Apa yang tidak termasuk dalam tanda dan gejala dm tipe 1 dan 2',
		answers: [
			'Sering haus (polidipsia)',
			'Berat badan turun',
			'Suhu badan meningkat (hipertermi)',
			'Kelelahan'
		],
		correctAnswer: 'Suhu badan meningkat (hipertermi)',
		explanation: `
		Ada beberapa tanda dan gejala dm tipe 1 dan 2 yaitu diantaranya :<br>
		<b>Tanda dan gejala dm tipe 1</b><br>
		Beberapa gejala dari diabetes tipe 1, antara lain:<br>
		<ol class="mb-3 mt-3 ps-5 space-y-2 list-outside list-disc">
			<li>Sering buang air kecil, terutama pada malam hari (polyuria)</li>
			<li>Sering haus (polydipsia)</li>
			<li>Sering merasa lapar (polyphagia)</li>
			<li>Berat badan turun meskipun pola makan tetap sama</li>
			<li>Pandangan kabur</li>
			<li>Kelelahan terus-menerus</li>
			<li>Mudah diserang penyakit infeksi</li>
			<li>Luka yang lama sembuh</li>
			<li>Merasa kaku atau kesemutan pada kaki</li>
			</ol>
			Pada pengidap diabetes tipe 1, gejala bisa terjadi secara tiba-tiba. Sebaiknya jangan abaikan ketika kamu mengalami keluhan kesehatan yang terkait dengan gejala diabetes tipe 1.<br><br>
			<b>Tanda dan gejala dm tipe 2</b><br>
			<ol class="mb-3 mt-3 ps-5 space-y-2 list-outside list-decimal">
				<li>Peningkatan frekuensi buang air kecil, terutama di malam hari</li>
				<li>Merasa haus sepanjang waktu</li>
				<li>Merasa sangat lelah</li>
				<li>Penurunan berat badan seccara tiba-tiba</li>
				<li>Gatal di sekitar kelamin</li>
				<li>Sariawan berulang kali</li>
				<li>Luka yang sulit sembuh</li>
				<li>Penglihatan kabur</li>
				<li>Mudah terserang infeksi</li>
				<li>Nyeri atau mati rasa pada kaki dan tangan</li>
				<li>Kesemutan</li>
			</ol>
		`,
		image: ''
	},
	{
		text: 'Apa faktor Risiko diabetes melitus (DM) yang bisa diubah?',
		answers: [
			'Faktor usia',
			'Obesitas',
			'Jenis kelamin',
			'Faktor keturunan (genetika)'
		],
		correctAnswer: 'Obesitas',
		explanation: `Faktor yang dapat diubah :<br>
			<ol class="mb-3 mt-3 ps-5 space-y-2 list-outside list-decimal">
				<li>Obesitas, penumpukan lemak dalam tubuh yaitu kalori yang masuk ke tubuh lebih tinggi dibandingkan aktivitas fisik yang dilakukan untuk membakarnya sehingga lemak menumpuk dan meningkatkan risiko DM tipe 2</li>
				<li>Kebiasaan merokok, sensitivitas insulin dapat turun oleh nikotin dan bahan kimia berbahaya lain di dalam rokok. Nikotin dapat meningkatkan kadar hormon katekolamin seperti adrenalin dan noradrenalin. Pelepasan adrenalin mengakibatkan naiknya kadar glukkosa darah</li>
				<li>Kurangnya aktivitas fisik</li>
				<li>Hipertensi</li>
			</ol>
			Adapun faktor resiko yang tidak dapat diubah diantaranya : <br>
			<ol class="mb-3 mt-3 ps-5 space-y-2 list-outside list-decimal">
				<li>Faktor usia</li>
				<li>Faktor keturunan (genetika)</li>
				<li>Jenis kelamin</li>
			</ol>
			`,
		image: ''
	},
	{
		text: `Mengapa penting bagi penderita DM untuk memperhatikan asupan serat dalam diet mereka?`,
		answers: [
			'Serat membantu mengendalikan gula darah',
			'Serat tidak memiliki peran dalam kesehatan pencernaan',
			'Serat meningkatkan risiko komplikasi DM',
			'Serat hanya menyebabkan kembung dan tidak nyaman'
		],
		correctAnswer: 'Serat membantu mengendalikan gula darah',
		explanation:
			'Serat membantu mengendalikan gula darah dengan memperlambat penyerapan glukosa, sehingga mencegah lonjakan gula darah yang tajam setelah makan',
		image: ''
	},
	{
		text: `Apa yang menyebabkan gangguan pada metabolisme karbohidrat, lemak, dan protein pada diabetes melitus?`,
		answers: [
			'Kekurangan asupan makanan',
			'Ketidakseimbangan hormon tiroid',
			'Gangguan dalam produksi insulin atau kerja insulin',
			'Penurunan aktivitas fisik'
		],
		correctAnswer: 'Gangguan dalam produksi insulin atau kerja insulin',
		explanation:
			'Gangguan pada metabolisme karbohidrat, lemak, dan protein pada diabetes melitus disebabkan oleh anomali dalam sekresi insulin atau kerja insulin, atau keduanya. Insulin adalah hormon yang mengatur metabolisme glukosa dan lemak dalam tubuh. Kekurangan asupan makanan, ketidakseimbangan hormon tiroid, dan penurunan aktivitas fisik dapat mempengaruhi metabolisme tubuh, tetapi tidak secara langsung terkait dengan gangguan metabolisme karbohidrat, lemak, dan protein yang khas dari diabetes melitus.',
		image: ''
	},
	{
		text: `Diabetes melitus merupakan suatu kelainan yang ditandai dengan hiperglikemia (kadar gula darah tinggi). Manakah dari berikut ini yang bukan merupakan ciri umum diabetes melitus tipe 2 ?`,
		answers: [
			'Gangguan sekresi insulin (penurunan kemampuan sel-sel beta pankreas dalam memproduksi insulin)',
			'Peningkatan resistensi insulin (sel-sel tubuh tidak dapat menggunakan gula darah dengan baik)',
			'Ketoasidosis diabetikum (asam darah (keton) berlebihan)',
			'Produksi glukosa hati yang berlebihan'
		],
		correctAnswer: 'Ketoasidosis diabetikum (asam darah (keton) berlebihan)',
		explanation: `Kadar gula darah tinggi: Diabetes tipe 2 ditandai dengan tingginya kadar glukosa dalam darah karena ketidakmampuan tubuh menggunakan insulin secara efektif. <br>
		Resistensi insulin: Insulin adalah hormon yang membantu mengatur kadar gula darah. Pada diabetes tipe 2, tubuh menjadi resisten terhadap insulin, yang berarti sel-sel tubuh tidak merespons insulin seefektif seharusnya.<br>
		Glukoneogenesis adalah proses di mana hati memproduksi glukosa dari sumber non-karbohidrat seperti asam amino dan lemak. Pada penderita diabetes tipe 2, glukoneogenesis dapat menyebabkan peningkatan kadar gula darah, yang merupakan ciri khas penyakit ini. <br>
		Resistensi insulin berarti sel-sel tubuh tidak merespons insulin seefektif yang seharusnya, sehingga tidak mudah menyerap glukosa dari aliran darah. Hal ini menyebabkan peningkatan kadar glukosa darah, yang dapat merangsang glukoneogenesis di hati.<br>
		Ketoasidosis diabetik (DKA) adalah komplikasi diabetes serius yang terjadi ketika tubuh memproduksi keton (sejenis asam) dalam jumlah tinggi karena kekurangan insulin dalam tubuh. Hal ini paling sering terlihat pada penderita diabetes tipe 1, namun bisa juga terjadi pada penderita diabetes tipe 2.
		`,
		image: ''
	},
	{
		text: `Perhatikan pernyataan dibawah ini untuk menjawab pertanyaan
		<ol type="1" class="mb-3 mt-3 ps-5 space-y-2 list-decimal list-outside">
			<li>Ajarkan Anak tentang DM Tipe 1</li>
			<li>Gunakan insulin setiap hari seumur hidup</li>
			<li>Atur pola makan sehat sesuai kebutuhan</li>
			<li>Rutin berolahraga</li>
			<li>Segera cek gula darah sewaktu secara rutin</li>
			</ol
		Bagaimanakah cara mengendalikan Diabetes Melitus Tipe 1 pada Anak?
		`,
		answers: ['1, 3, 4', '1 dan 3', '5 dan 1', 'Semua benar'],
		correctAnswer: 'Semua benar',
		explanation: `Diabetes melitus (DM) tidak bisa disembuhkan. Pengobatan yang dilakukan hanya bertujuan untuk menjaga keseimbangan kadar glukosa darah dan mengendalikan gejala. Selain itu, pengobatan juga dilakukan untuk mencegah komplikasi yang dapat terjadi di kemudian hari.<br>
		<ol type="1" class="mb-3 mt-3 ps-5 space-y-2 list-decimal list-outside"> 
			<li>Insulin untuk mengontrol glukosa darah. Pemberian insulin ini dengan cara disuntikkan pada lapisan di bawah kulit sekitar 3-4 kali sehari sesuai dosis yang dianjurkan dokter</li>	
			<li>Pola makan sehat dan olahraga teratur untuk membantu mengontrol tingkat glukosa darah</li>	
		</ol>
		`,
		image: ''
	},
	{
		text: 'Hal apa yang tidak termasuk penyebab  seseorang mengalami kencing manis atau diabetes mellitus?',
		answers: [
			'Kurang insulin dalam tubuh',
			'Kadar gula darah yang tinggi',
			'Faktor genetik',
			'Kadar gula darah rendah'
		],
		correctAnswer: 'Kadar gula darah rendah',
		explanation: `Diabetes tipe 1 adalah kondisi kadar gula darah tinggi yang disebabkan oleh kurangnya hormon insulin dalam tubuh. Sedangkan, diabetes tipe 2 merupakan penyakit kadar gula darah tinggi karena pada awalnya sel tubuh tidak dapat menggunakan hormon insulin secara optimal (pada kondisi yang lebih advanced keduanya menjadi serupa dalam mekanismenya).<br>
		Ada beberapa faktor yang berkontribusi terhadap perkembangan diabetes melitus tipe 2, termasuk:<br>
		<ul type="1" class="mb-3 mt-3 ps-5 space-y-2 list-disc list-outside">
			<li>Faktor genetik dan riwayat keluarga</li>
			<li>Obesitas</li>
			<li>Gaya hidup tidak sehat</li>
			<li>Usia dan faktor hormonal</li>
		</ul>
		`,
		image: ''
	}
]

// question page
// question page
// question page
const questionElement = document.getElementById('question')
const questionImage = document.getElementById('question-image')
const currentQuestionInfo = document.getElementById('current-question')
const totalQuestionInfo = document.getElementById('total-question')
const solutionPage = document.getElementById('solution-page')
const quizPage = document.getElementById('quiz-page')
const answerBtn = document.getElementById('answer-btn')
const overlay = document.getElementById('overlay')

// explanation page
// explanation page
// explanation page
const solutionTitle = document.getElementById('solution-title')
const solutionQuestion = document.getElementById('solution-question')
const userAnswerInfo = document.getElementById('user-answer')
const correctAnswerInfo = document.getElementById('correct-answer')
const correctAnswerTitle = document.getElementById('correct-answer-title')
const solutionExplanation = document.getElementById('solution-explanation')
const nextButton = document.getElementById('next-button')

const totalQuestion = db.length
let questionNumber
let userAnswer

const directToPage = (destinationPage) => {
	const body = document.querySelector('body')
	const spinner = document.createElement('div')

	overlay.classList.remove('invisible')

	setTimeout(() => {
		overlay.classList.remove('opacity-0')
		overlay.classList.add('opacity-40')
	}, 250)

	setTimeout(() => {
		spinner.classList.add(
			'flex',
			'justify-center',
			'items-center',
			'fixed',
			'inset-0',
			'z-[100]'
		)

		spinner.innerHTML = `
					<div
						class="text-white focus:ring-4 focus:ring-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:focus:ring-blue-400 inline-flex items-center">
						<svg aria-hidden="true" class="inline w-12 h-12 text-gray-200 animate-spin dark:text-gray-200 fill-blue-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
								<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
						</svg>
						<span class="sr-only">Loading...</span>
					</div>
					`
		body.append(spinner, overlay)

		setTimeout(() => {
			window.location.href = destinationPage
		}, 2400)
	}, 500)
}

const checkStorage = () => {
	return typeof Storage !== 'undefined'
}

const renderAnswers = (question) => {
	for (let index in question.answers) {
		const label = document.createElement('label')
		let numIndex = parseInt(index) + 1

		label.setAttribute(
			'class',
			'relative px-5 py-5 flex items-center gap-4 border bg-white border-border-color rounded-lg cursor-pointer hover:bg-primary-color hover:bg-opacity-[0.15] transition-all ease-in-out duration-200'
		)
		label.setAttribute('for', `option-${numIndex}-value`)
		label.setAttribute('id', `option-${numIndex}`)

		label.innerHTML = `
			<input
				class="absolute w-5 h-5 max-w-5 max-h-5 appearance-none outline-none rounded-full border border-border-color before:content-[''] before:block before:w-3/5 before:h-3/5 before:my-[19%] before:mx-[auto] checked:before:bg-primary-color checked:before:rounded-full checked:border-primary-color border-solid mr-3"
				type="radio" name="option" id="option-${numIndex}-value" value="${question.answers[index]}" required />
			<p class="text-text-color text-base text-justify ml-8" id="option-${numIndex}-text">
				${question.answers[index]}
			</p>
		`
		document.getElementById('options').appendChild(label)
	}
}

const nextQuestion = () => {
	questionNumber = parseInt(sessionStorage.getItem(CURRENT_QUESTION_KEY)) + 1

	currentQuestionInfo.innerText = questionNumber
	totalQuestionInfo.innerText = totalQuestion

	document.dispatchEvent(new Event(RENDER_QUESTION_EVENT))
	document.dispatchEvent(new Event(CLICK_ANSWER_EVENT))

	sessionStorage.setItem(CURRENT_QUESTION_KEY, questionNumber)
}

const startQuiz = () => {
	currentQuestionInfo.innerText = sessionStorage.getItem(CURRENT_QUESTION_KEY)
	totalQuestionInfo.innerText = totalQuestion

	document.dispatchEvent(new Event(RENDER_QUESTION_EVENT))
	document.dispatchEvent(new Event(CLICK_ANSWER_EVENT))
}

const checkAnswer = (userAnswer, question) => {
	if (userAnswer == question.correctAnswer) {
		// implements some check answer logic
		sessionStorage.setItem(
			CORRECT_ANSWER_KEY,
			parseInt(sessionStorage.getItem(CORRECT_ANSWER_KEY)) + 1
		)
		document.dispatchEvent(new Event(RENDER_EXPLANATION_EVENT))
		return
	}

	sessionStorage.setItem(
		WRONG_ANSWER_KEY,
		parseInt(sessionStorage.getItem(WRONG_ANSWER_KEY)) + 1
	)
	document.dispatchEvent(new Event(RENDER_EXPLANATION_EVENT))
}

window.addEventListener('DOMContentLoaded', () => {
	if (checkStorage()) {
		if (!sessionStorage.getItem(USERNAME_SESSION_KEY)) {
			directToPage('/')
			return
		}

		sessionStorage.setItem(CORRECT_ANSWER_KEY, 0)
		sessionStorage.setItem(WRONG_ANSWER_KEY, 0)
		sessionStorage.setItem(TOTAL_QUESTIONS_KEY, totalQuestion)
		sessionStorage.setItem(CURRENT_QUESTION_KEY, 1)
		questionNumber = parseInt(sessionStorage.getItem(CURRENT_QUESTION_KEY))

		startQuiz()
		return
	}

	alert('Browser anda tidak mendukung Web Storage')
})

document.addEventListener(CLICK_ANSWER_EVENT, () => {
	const options = Array.from(document.getElementById('options').children)
	const radios = options.map((option) => option.querySelector('input'))

	radios.forEach((radio) => {
		radio.addEventListener('click', (e) => {
			e.stopPropagation()

			radios.map((radio, i) => {
				const label = options[i]
				if (radio.checked === e.currentTarget.checked) {
					label.classList.remove('border-border-color', 'bg-white')
					label.classList.add(
						'border-primary-color',
						'bg-option-box-color'
					)
					radio.setAttribute('checked', '')

					document.dispatchEvent(new Event(CHECK_ANSWER_EVENT))

					return radio
				}

				label.classList.remove(
					'border-primary-color',
					'bg-option-box-color'
				)
				label.classList.add('border-border-color', 'bg-white')
				radio.removeAttribute('checked')

				return radio
			})
		})
	})
})

document.addEventListener(CHECK_ANSWER_EVENT, () => {
	answerBtn.classList.remove('opacity-0', 'invisible', 'opacity-100')

	answerBtn.addEventListener('click', (e) => {
		e.stopImmediatePropagation()

		const options = Array.from(document.getElementById('options').children)
		const radios = options.map((option) =>
			option.querySelector('input[type="radio"]')
		)
		userAnswer = radios.find((radio) => radio.checked).value

		const currentQuestion = parseInt(
			document.getElementById('current-question').innerText
		)

		checkAnswer(userAnswer, db[currentQuestion - 1])
	})
})

document.addEventListener(RENDER_QUESTION_EVENT, () => {
	setTimeout(() => {
		window.scrollTo(0, 0)
	}, 250)

	solutionPage.classList.add('opacity-0')
	setTimeout(() => {
		solutionExplanation.innerHTML = ''
		solutionPage.classList.add('absolute', 'z-[-30]', 'invisible')
	}, 500)
	setTimeout(() => {
		quizPage.classList.remove('opacity-0', 'absolute', 'z-[-30]', 'invisible')
	}, 1000)

	const question = db[questionNumber - 1]
	questionElement.innerHTML = question.text

	if (question.image !== '') {
		questionImage.parentNode.classList.remove(
			'invisible',
			'absolute',
			'-z-10'
		)
		questionImage.src = question.image
	} else {
		questionImage.parentNode.classList.add('invisible', 'absolute', '-z-10')
		questionImage.src = ''
	}
	renderAnswers(question)
})

document.addEventListener(RENDER_EXPLANATION_EVENT, () => {
	setTimeout(() => {
		window.scrollTo(0, 0)
	}, 250)

	quizPage.classList.add('opacity-0')
	setTimeout(() => {
		quizPage.classList.add('absolute', 'z-[-30]', 'invisible')
	}, 500)
	const correctAnswer = db[questionNumber - 1].correctAnswer

	setTimeout(() => {
		if (userAnswer != correctAnswer) {
			correctAnswerTitle.innerText = 'Jawaban Yang Benar'

			userAnswerInfo.parentElement.parentElement.classList.remove(
				'invisible',
				'absolute',
				'z-[-30]'
			)

			solutionTitle.innerHTML =
				'Oops, Jawaban Kamu <br><span class="text-wrong-text-color">Masih Salah <img class="inline" src="./assets/img/sad.png" /></span>'
			solutionQuestion.innerHTML = db[questionNumber - 1].text
			userAnswerInfo.innerHTML = userAnswer
			correctAnswerInfo.innerHTML = correctAnswer
			solutionExplanation.innerHTML = db[questionNumber - 1].explanation
			solutionPage.classList.remove(
				'opacity-0',
				'absolute',
				'z-[-30]',
				'invisible'
			)
			return
		}

		solutionTitle.innerHTML =
			'Yay, Jawaban Kamu <br><span class="text-correct-text-color">Sudah Benar <img class="inline" src="./assets/img/smile.png" /></span>'
		document.getElementById('correct-answer-title').innerText = 'Jawaban Kamu'
		solutionQuestion.innerHTML = db[questionNumber - 1].text
		userAnswerInfo.parentElement.parentElement.classList.add(
			'invisible',
			'absolute',
			'z-[-30]'
		)
		correctAnswerInfo.innerHTML = userAnswer
		solutionExplanation.innerHTML = db[questionNumber - 1].explanation
		solutionPage.classList.remove(
			'opacity-0',
			'absolute',
			'z-[-30]',
			'invisible'
		)
	}, 1000)

	if (questionNumber == totalQuestion) {
		nextButton.innerText = 'Submit Now'
	}

	nextButton.addEventListener('click', (e) => {
		e.stopImmediatePropagation()
		document.getElementById('options').innerHTML = ''
		answerBtn.classList.add('opacity-0', 'invisible')
		answerBtn.classList.remove('opacity-100')

		if (questionNumber <= totalQuestion - 1) {
			nextQuestion()
			return
		}

		directToPage('/' + window.location.href.split('/')[3] + '/score.html')
		return
	})
})
