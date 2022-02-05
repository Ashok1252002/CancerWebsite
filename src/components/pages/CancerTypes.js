import React from "react";
import "../css/CancerTypes.css";

const CancerTypes = () => {
	const cancerTypes = [
		{
			id: 1,
			title: "Bladder cancer",
			overview:
				"This cancer typically affects older adults. It's usually diagnosed early, when it's still treatable. It's likely to recur, so follow-up tests are typically recommended.The most common symptom is blood in the urine.Treatments include surgery, biological therapy and chemotherapy.",
			emergency:
				"Urgent medical attention is usually recommended by healthcare providers",
			rare: "Rare (Fewer than 10 lakh cases per year in India)",
			treatment: "Treatable by a medical professional",
			test: "Requires lab test or imaging",
			time: "Can last several months",
			age: "Common for ages 35-50",
			gender: "More common in males",
			youtube: "https://www.youtube.com/embed/7N6fJQkCGZw",
			image:
				"https://www.bing.com/th?id=OCII.929CAC4E5089756C321A0793368EBD0618CA262AD255947ED2B73FD6CE3476F8&w=245&h=170&o=6&dpr=1.25&pid=HealthConditionsMainline",
			symptoms: [
				"Blood in urine",
				"Difficulty in urinating",
				"Low back pain",
				"Rapid weight loss",
				"loss of appetite",
				"Swollen feet",
				"Extreme weakness and tiredness",
			],
		},
		{
			id: 2,
			title: "Breast cancer",
			overview:
				"A cancer that develops in the breast cells and progresses in stages. Few early symptoms may include new lump in the underarm or in breast, itching or discharge from the nipples, and skin texture change of the nipple or breast.",
			rare: "Common (More than 10 lakh cases per year in India)",
			treatment: "Treatable by a medical professional",
			test: "Requires lab test or imaging",
			time: "Can last several months",
			age: "Common for ages 50 and older",
			gender: "More common in females",
			youtube: "https://www.youtube.com/embed/VsviAPGfPUo",
			image:
				"https://www.bing.com/th?id=OCII.F3B703C0F8087E9403B7871D376D1CB55E6DA0F315380D48CE0B77F429D9C396&w=245&h=170&o=6&dpr=1.25&pid=HealthConditionsMainline",
			symptoms: [
				"A lump or mass in the breast that feels different from the surrounding tissue",
				"Change is the shape, size, or appearance of the breast",
				"Discharge from the nipple",
				"Breast rash",
				"Changes in the skin over the breast, for example, dimpling",
				"Breast pain",
				"Inverted or pulling-in of the nipple",
				"Scaling, peeling, or flaking skin over the breast, particularly the dark area around the nipple",
				"Redness and/or pitting of the breast skin, resembling the skin of orange",
			],
		},
		{
			id: 3,
			title: "Cervical cancer",
			overview:
				"A malignant tumour of the lower-most part of the uterus (womb) that can be prevented by PAP smear screening and a HPV vaccine. Symptoms include bleeding in between periods and after sexual intercourse. Foul smelling white discharge and low back pain or lower abdominal pain may also occur. In some cases there may be no symptoms. Treatments include surgery, radiation and chemotherapy.",
			emergency:
				"Urgent medical attention is usually recommended by healthcare providers",
			rare: "Rare (Fewer than 10 lakh cases per year in India)",
			treatment: "Treatable by a medical professional",
			test: "Often requires lab test or imaging",
			time: "Can last several months",
			age: "Common for ages 35-50",
			gender: "More common in females",
			youtube: "https://www.youtube.com/embed/CVj19sMBuds",
			image:
				"https://www.bing.com/th?id=OCII.DB2CB885DF80808AE771462E42BCA4D16C75B6DDDE3413215A8429C884706AA8&w=245&h=170&o=6&dpr=1.25&pid=HealthConditionsMainline",
			symptoms: [
				"Vaginal bleeding after intercourse",
				"Abnormal Vaginal discharge with foul odor",
				"Pelvic pain during intercourse",
			],
		},
		{
			id: 4,
			title: "Colorectal cancer",
			overview:
				"Cancer that begins in the last part of the digestive tract-colon (large intestine).",
			emergency:
				"Urgent medical attention is usually recommended by healthcare providers",
			rare: "Common (More than 10 lakh cases per year in India)",
			treatment: "Treatable by a medical professional",
			test: "Requires lab test or imaging",
			age: "Common for ages 35-50",
			gender: "Common for ages 50 and older",
			time: "Can last several months",
			youtube: "https://www.youtube.com/embed/fW4Y_poPPxg",
			image:
				"https://www.bing.com/th?id=OCII.707B6792B36DD9BCA3AB44E04DEE37FB5F68F7EB7DF49344F59A57DE97588341&w=245&h=170&o=6&dpr=1.12&pid=HealthConditionsMainline",
			symptoms: [
				"Constipation",
				"Chronic diarrhea",
				"Bowel obstruction",
			],
		},
		{
			id: 5,
			title: "Esophageal cancer",
			overview:
				"Tumour hat occurs in esophagus - tube which connects from throat to the stomach. This causes difficulty in swallowing, chest pain, cough, sudden weight loss and heartburn.",
			emergency:
				"Urgent medical attention is usually recommended by healthcare providers",
			rare: "Rare (Fewer than 10 lakh cases per year in India)",
			treatment: "Treatable by a medical professional",
			test: "Often requires lab test or imaging",
			age: "Common for ages 60 and older",
			gender: "More common in males",
			time: "Can last several months",
			youtube: "https://www.youtube.com/embed/Nywrslwv9mc",
			image:
				"https://www.bing.com/th?id=OCII.6D27B1116047CD86E4AC219D1BD375364DD17A49BCE6E292B46613456B1F0B2C&w=245&h=170&o=6&dpr=1.12&pid=HealthConditionsMainline",
			symptoms: [
				"Difficulty in swallowing",
				"Unintentional weight loss",
				"Chest pain",
				"Heart burn",
				"Indigestion",
				"Coughing",
				"Hoarse voice",
			],
		},
		{
			id: 6,
			title: "Kidney cancer",
			overview:
				"A disease caused by development of cancerous (malignant) cells in the kidney. This causes blood in urine, lump in the abdomen, low back pain, sudden weight loss, extreme fatigue and fever.",
			emergency:
				"Urgent medical attention is usually recommended by healthcare providers",
			rare: "Rare (Fewer than 10 lakh cases per year in India)",
			treatment: "Treatable by a medical professional",
			test: "Requires lab test or imaging",
			age: "Common for ages 60 and older",
			gender: "More common in males",
			time: "Can last several months",
			youtube: "https://www.youtube.com/embed/14x88S--uw0",
			image:
				"https://www.bing.com/th?id=OCII.51E7193CB64B9BE24DA215DF7E6BBE6592DD2B09BF2B4992D3143F104063D680&w=245&h=170&o=6&dpr=1.12&pid=HealthConditionsMainline",
			symptoms: [
				"Blood in urine",
				"Sudden weight loss",
				"Lump in the abdomen",
				"Pain in the lower back",
				"Fever",
				"Loss of appetite",
			],
		},
		{
			id: 7,
			title: "Laryngeal cancers",
			overview:
				"A condition resulting in inflammation of the voice box (larynx) due to overuse or infection by virus.",
			emergency:
				"Urgent medical attention is usually recommended by healthcare providers",
			rare: "Very common (More than 1 crore cases per year in India)",
			treatment: "Treatable by a medical professional",
			test: "Rarely requires lab test or imaging",
			age: "Common for ages 60 and older",
			gender: "More common in both male and females",
			youtube: "https://www.youtube.com/embed/2bjzt3gZIkk",
			time: "Can last several months",
			image:
				"https://www.bing.com/th?id=OCII.77E2F976B97F16A10BD14B4D2F108DE3FE486494E17FD5C7D0C156634BD15166&w=245&h=170&o=6&dpr=1.12&pid=HealthConditionsMainline",
			symptoms: [
				"Hoarseness",
				"Impaired voice",
				"Difficulty in speaking",
				"Dry and sore throat",
				"Dry cough",
				"Constant tickling or irritation in throat",
			],
		},
		{
			id: 8,
			title: "Liver cancer",
			overview:
				"A condition results from development of tumours in the liver cells. It causes jaundice, weight loss, stomach pain, tiredness and vomiting.",
			emergency:
				"Urgent medical attention is usually recommended by healthcare providers",
			rare: "Rare (Fewer than 10 lakh cases per year in India)",
			treatment: "Treatable by a medical professional",
			test: "Requires lab test or imaging",
			age: "Common for ages 50 and older",
			gender: "More common in males",
			time: "Can last several months",
			youtube: "https://www.youtube.com/embed/8ARQ9l5E9CE",
			image:
				"https://www.bing.com/th?id=OCII.9D329074BB641CCC75B93CE3AC87E43531E8C7CEE147137857C70A88C3F37AAD&w=245&h=170&o=6&dpr=1.12&pid=HealthConditionsMainline",
			symptoms: [
				"Ascites (fluid accumulation in the abdomen)",
				"Jaundice",
				"High cholesterol",
				"Stomach pain",
				"Weight loss",
				"High blood calcium levels",
				"Breast enlargement",
				"Dark colored urine",
			],
		},
		{
			id: 9,
			title: "Lung cancer",
			overview:
				"Cancer which begins in the cells of the lung. It causes difficulty breathing, coughing up blood, chest pain, hoarseness, headache and weight loss.",
			emergency:
				"Urgent medical attention is usually recommended in severe cases by healthcare providers",
			rare: "Common (More than 10 lakh cases per year in India)",
			treatment: "Treatable by a medical professional",
			test: "Often requires lab test or imaging",
			age: " 70 to 74 age group",
			gender: "More common in males",
			time: "Can last several months",
			youtube: "https://www.youtube.com/embed/AIz-nN2bzLk",
			image:
				"https://www.bing.com/th?id=OCII.50360B7588D0FB71A2F7C5BAAE966AFA63B7F698C09BC9753873A759E7C0E1A2&w=245&h=170&o=6&dpr=1.12&pid=HealthConditionsMainline",
			symptoms: [
				"Chest pain that worsens when you breathe deeply, laugh, or a cough.",
				"Hoarseness",
				"A lingering or worsening cough",
				"Shortness of breath",
				"Wheezing",
				"Weakness and fatigue",
				"Loss of appetite and weight Loss",
				"Coughing up phlegm or blood",
				"Muscle Weakness",
				"Nausea",
				"Vomiting",
				"High blood pressure",
				"High blood sugar",
				"Confusion",
				"Seizures",
				"Coma",
			],
		},
		{
			id: 10,
			title: "Oral cancer",
			overview:
				"A growth that occurs in the mouth caused due to uncontrolled cell division. This causes mouth sore, white or reddish patch, lump inside the mouth, ear pain, and difficulty in swallowing.",
			emergency:
				"Urgent medical attention is usually recommended by healthcare providers",
			rare: "Common (More than 10 lakh cases per year in India)",
			treatment: "Treatable by a medical professional",
			test: "Treatments can help manage condition, no known cure",
			age: "Common for ages 50 and older",
			gender: "More common in males",
			time: "Can last several months",
			youtube: "https://www.youtube.com/embed/4xItXIOLmEM",
			image:
				"https://www.bing.com/th?id=OCII.FBA52FA93317C8372F4B0BDB5141C76B5403D5D6751AA25E8C837104EC40829F&w=245&h=170&o=6&dpr=1.12&pid=HealthConditionsMainline",
			symptoms: [
				"Lumps or bumps",
				"Swelling or thickening",
				"Rough spots",
				"Velvet, white, reddish specks",
				"Bleeding or numbness that is unexplained",
			],
		},
		{
			id: 11,
			title: "Ovarian cancer",
			overview:
				"Cancer that arises from different cells of the ovaries, the paried female reproductive organ.",
			emergency:
				"Urgent medical attention is usually recommended by healthcare providers",
			rare: "Rare (Fewer than 10 lakh cases per year in India)",
			treatment: "Treatable by a medical professional",
			test: "Often requires lab test or imaging",
			age: "Common for ages 50 and older",
			gender: "More common in females",
			time: "Can last several months",
			youtube: "https://www.youtube.com/embed/yQ4eDgXEjjk",
			image:
				"https://www.bing.com/th?id=OCII.F20F6A0A1F036D1E25B292E498A7DE6F20E4B464F9E93F385A924ACC778BE266&w=245&h=170&o=6&dpr=1.12&pid=HealthConditionsMainline",
			symptoms: [
				"Abdominal enlargement or swelling",
				"Abdominal fullness and pain",
				"Pain in lower abdomen",
				"Feeling full after eating very little",
				"Tiredness",
				"Changes in bowel or bladder habits",
				"Clothes not fitting well",
				"Swelling of legs",
				"Shortness of breath",
				"Bleeding from vagina",
				"Abnormal menstrual cycles",
				"Weight loss or gain",
				"Unexplained back pain",
			],
		},
		{
			id: 12,
			title: "Pancreatic cancer",
			overview:
				"Cancer of pancreas, an organ which is behind the lower part of the stomach. This causes abdominal pain, jaundice, itchy skin, fatigue and weight loss.",
			emergency:
				"Urgent medical attention is usually recommended by healthcare providers",
			rare: "Rare (Fewer than 10 lakh cases per year in India)",
			treatment: "Treatable by a medical professional",
			test: "Often requires lab test or imaging",
			age: "patients under 40 years of age",
			gender: "slightly more common in men than women",
			youtube: "https://www.youtube.com/embed/YmsR_Vmom8o",
			time: "Can last several months",
			image:
				"https://www.bing.com/th?id=OCII.DE0182C77FA35B414606E0BB6688E600E41378153EB03B8C4E62FF5975DBEF25&w=245&h=170&o=6&dpr=1.12&pid=HealthConditionsMainline",
			symptoms: [
				"Digestive problems, including abnormal stools, nausea or vomiting",
				"Pain in the upper abdomen and back",
				"Loss of appetite",
				"Sudden weight Loss",
				"Jaundice (yellowing of the skin and whites of the eyes)",
				"Very high sugar levels in diabetic patients",
			],
		},
		{
			id: 13,
			title: "Prostate cancer",
			overview:
				"A cancer of the prostate gland, a part of the male reproductive system.",
			emergency:
				"Urgent medical attention is usually recommended by healthcare providers",
			rare: "Rare (Fewer than 10 lakh cases per year in India)",
			treatment: "Treatment from medical professional advised",
			test: "Often requires lab test or imaging",
			age: "Common for ages 50 and olde",
			gender: "More common in males",
			time: "Can last several months",
			image:
				"https://th.bing.com/th/id/OIP.U6eJbenMx1r5tJaqCyUeqgHaEK?pid=ImgDet&rs=1",
			youtube: "https://www.youtube.com/embed/zg3j5Ig4dJY",
			symptoms: [
				"Trouble urinating",
				"Frequent urination",
				"Decreased force of urination",
				"Difficulty starting or stopping urine stream",
				"Blood in semen",
				"Pain or discomfort in the pelvic area",
				"Bone pain",
			],
		},
		{
			id: 14,
			title: "Skin Cancer",
			overview:
				"Skin cancer occurs when errors (mutations) occur in the DNA of skin cells. The mutations cause the cells to grow out of control and form a mass of cancer cells.",
			emergency:
				"Urgent medical attention is usually recommended by healthcare providers",
			rare: "Rare (Fewer than 10 lakh cases per year in India)",
			treatment: "Treatment from medical professional advised",
			test: "Often requires lab test or imaging",
			age: "Common for ages 50 and olde",
			gender: "More common in males",
			time: "Can last several months",
			image: "https://i.ytimg.com/vi/HGG1_pT7mSY/maxresdefault.jpg",
			youtube: "https://www.youtube.com/embed/BuuXPFaSh0c",
			symptoms: [
				"A firm, transparent bump laced with tiny blood vessels in thin red lines (telangiectasias).",
				"A reddish or irritated patch of skin.",
				"A new, smooth skin bump (nodule) with a raised border and indented center.",
			],
		},
		{
			id: 15,
			title: "Stomach cancer",
			overview:
				"A cancer that develops from the inner lining of the stomach. It causes bloating stomach pain, difficulty in swallowing, nausea, vomiting, fatigue and weight loss.",
			emergency:
				"Urgent medical attention is usually recommended in severe cases by healthcare providers",
			rare: "Rare (Fewer than 10 lakh cases per year in India)",
			treatment: "Treatable by a medical professional",
			test: "Often requires lab test or imaging",
			age: "Common for ages 50 and older",
			gender: "More common in males",
			time: "Can last several months",
			youtube: "https://www.youtube.com/embed/7M7mxQKViuo",
			image:
				"https://www.bing.com/th?id=OCII.ACA1CFFB87455D4C8E41AA045059DA538DBAB63FC77AF688A589F3BF94954B47&w=245&h=170&o=6&dpr=1.12&pid=HealthConditionsMainline",
			symptoms: [
				"Fatigue",
				"Stomach pain, which worsens after eating",
				"Bloating of stomach, especially after eating",
				"Feeling of stomach fullness, even after eating very little",
				"Severe and persistent heartburn",
				"Severe and persistent indigestion",
				"Persistent nausea and vomiting",
				"Loss of appetite",
				"Unintentional weight Loss",
			],
		},
		{
			id: 16,
			title: "Testicular cancer",
			overview:
				"Cancer that develops in the testicles, a male organ that produce sex hormones and sperm for reproduction. It causes lump in testicles, swollen lymph nodes, sudden fluid collection in scrotum, and abdominal pain.",
			emergency:
				"Urgent medical attention is usually recommended by healthcare providers",
			rare: "Very rare (Fewer than 1 lakh cases per year in India)",
			treatment: "Treatable by a medical professional",
			test: "Requires lab test or imaging",
			age: "Common for ages 15-49",
			gender: "More common in males",
			time: "Can last several months",
			youtube: "https://www.youtube.com/embed/kfcxXl9uK_Y",
			image:
				"https://www.bing.com/th?id=OCII.7FFD49EE8B26F15CB6490916D4F2617FB5FD041A8B5FF1AF83478F63956832D3&w=245&h=170&o=6&dpr=1.12&pid=HealthConditionsMainline",
			symptoms: [
				"Pulmonary embolism- During the later stages of testicular cancer, blood can clot in an artery in the lungs leading to shortness of breath",
				"Metastasis to other organs and lymph nodes",
				"Infertility due to impaired production of sperms because of malignancy",
				"Hypogonadism due to decreased testosterone production by the testes",
			],
		},
		{
			id: 17,
			title: "Thyroid cancer",
			overview:
				"A cancer that develops in the cells of thyroid gland, a butterfly-shaped gland located just below adam's apple in the neck. It causes difficulty swallowing hoarseness, lump on the neck, and swollen lymph nodes in the neck.",
			emergency:
				"Urgent medical attention is usually recommended by healthcare providers",
			rare: "Rare (Fewer than 10 lakh cases per year in India)",
			treatment: "Treatable by a medical professional",
			test: "Often requires lab test or imaging",
			time: "Can last several months",
			age: "Common for ages 35-50",
			gender: "Common for both male and female",
			youtube: "https://www.youtube.com/embed/OBQi_aOhz1A",
			image:
				"https://www.bing.com/th?id=OCII.2B12DD921B753EDD27F5C6BEF642B015B8CBE3A50B9E3AC9ABD2A8A1DC2E957D&w=245&h=170&o=6&dpr=1.12&pid=HealthConditionsMainline",
			symptoms: [
				"Hoarse voice",
				"Neck pain, accompanied by ear pain in some cases",
				"Trouble swallowing",
				"Swollen lymph nodes in the Neck",
				"Difficulty breathing or Constant wheezing",
				"Frequent cough, not related to cold",
				"Hot flashes",
			],
		},
		{
			id: 19,
			title: "Uterine cancer",
			overview:
				"A cancerous tumour which forms in the uterus. Uterus is a pear shaped organ in female pelvis between the bladder and rectum. It causes bleeding between periods, vaginal bleeding after menopause, painful sexual intercourse, and abnormal, heavy or irregular menstruation.",
			emergency:
				"Urgent medical attention is usually recommended by healthcare providers",
			rare: "Rare (Fewer than 10 lakh cases per year in India)",
			treatment: "Treatable by a medical professional",
			test: "Requires lab test or imaging",
			age: "Common for ages 50 and older",
			gender: "More common in females",
			time: "Can last several months",
			youtube: "https://www.youtube.com/embed/eh9lAFFRhCI",
			image:
				"https://www.bing.com/th?id=OCII.29473E469738E9EE02947770C5E86A636103D7E6D24BBE97EAF9F62F1C63E1A2&w=245&h=170&o=6&dpr=1.12&pid=HealthConditionsMainline",
			symptoms: [
				"Vaginal bleeding after menopause",
				"Bleeding between periods",
				"Pain in the pelvis",
				"Pain during sexual intercourse",
				"Abnormal, heavy or irregular menstruation",
				"Abnormal Vaginal bleeding",
				"Weight loss",
				"Abnormal, watery or blood-tinged Vaginal discharge",
			],
		},
	];

	// const [dropdown, setDropdown] = useState(false);
	// const [uid, setUid] = useState(null);
	return (
		<div style={{ marginTop: "120px" }}>
			{cancerTypes.map((cancerType) => (
				<div key={cancerType.id} className="container">
					<div>
						<img
							src={cancerType.image}
							className="imageTag"
							alt={cancerType.image}
						/>
					</div>
					<div>
						<h1>{cancerType.title}</h1>
						<div className="col-2">
							<i
								class="fab fa-stack-overflow"
								style={{ marginRight: "10px" }}
							></i>
							<p>{cancerType.overview}</p>
						</div>
						{cancerType.emergency && (
							<div className="col-2">
								<i
									class="fas fa-exclamation-circle"
									style={{ color: "#ef0413", marginRight: "5px" }}
								></i>
								<p>{cancerType.emergency}</p>
							</div>
						)}
						<div className="col-2">
							<i
								class="fas fa-chart-bar"
								style={{ marginRight: "6px" }}
							></i>
							<p>{cancerType.rare}</p>
						</div>
						<div className="col-2">
							<i
								class="fas fa-plus-square"
								style={{ marginRight: "10px" }}
							></i>
							<p>{cancerType.treatment}</p>
						</div>
						<div className="col-2">
							<i
								class="fas fa-flask"
								style={{ marginRight: "10px" }}
							></i>
							<p>{cancerType.test}</p>
						</div>
						<div className="col-2">
							<i
								class="fas fa-clock"
								style={{ marginRight: "7px" }}
							></i>
							<p>{cancerType.time}</p>
						</div>
						<div className="col-2">
							<i
								class="fas fa-user-friends"
								style={{ marginRight: "5px" }}
							></i>
							<p>{cancerType.age}</p>
						</div>
						<div className="col-2">
							<i
								class="fas fa-venus-mars"
								style={{ marginRight: "6px" }}
							></i>
							<p>{cancerType.gender}</p>
						</div>
					</div>
					<div className="col-3">
						<h2>Symptoms</h2>
						{cancerType.symptoms.map((symptom) => (
							<div className="col-2">
								<i
									class="fas fa-hand-point-right"
									style={{ marginRight: "6px" }}
								></i>
								<p>{symptom}</p>
							</div>
						))}
					</div>
					<div>
						<iframe
							width="430"
							height="330"
							src={cancerType.youtube}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
				</div>
			))}
		</div>
	);
};

export default CancerTypes;
