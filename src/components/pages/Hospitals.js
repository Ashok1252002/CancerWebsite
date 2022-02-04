import React from "react";
import "../css/Hospital.css";

const Hospitals = () => {
	const hospitals = {
		cancer: [
			{
				id: 1,
				title: "University of Texas M D Anderson",
				image:
					"https://listtop10s.com/wp-content/uploads/2013/11/Top-10-Best-Cancer-Treatment-Hospitals.jpg",
				description:
					"The hospital that is on the top on the list of top 10 best cancer treatment hospitals in the world is University of Texas M D Anderson located in Texas, USA. This is one of the oldest cancer treating hospitals in the world. It was established in 1941 and until now almost 500,000 cancer patients has got treatment from this hospital. It is a 631 bed hospital that not only focuses on the treatment of the patients but also on the diagnosis and prevention. The quality of care provided in this hospital with more than 60 years of heritage make it to be ranked as the number one cancer hospital in the United States for last ten years consecutively including 2020.Its integrative access of cancer treatment with ingenious ways for obstructing the spread of cancer and different procedures with research work on the strengthening of immune system to battle against cancer make it a right choice for cancer treatment. This institute is working hardly in order to relieve the pain of cancer patients and to realize the people that they can find an appropriate treatment of this disease.",
			},
			{
				id: 2,
				title: "Memorial Sloan-Kettering Cancer Center",
				image:
					"https://listtop10s.com/wp-content/uploads/2013/11/Best-Cancer-treatment-hospitals-Memorial-Sloan-Kettering-Cancer-Center.jpg",
				description:
					"The Memorial Sloan-Kettering Cancer Center is a cancer treatment center and research institute in New York City that was established in 1884 as the New York Cancer Hospital. It is known as the world’s oldest and largest cancer hospital that is full dedicated towards its services in providing the best care and treatment to its patients. It was the first hospital that provided services according to the psychiatric aspects of cancer in order to relieve the pain of cancer and to provide genetic counseling and psychological support and make them better able to cope with cancer. This hospital has accommodation for almost 470 patients and has 21 operating rooms and it is a leader in chemotherapy, radiotherapy and cancer surgery. Here hundreds of neuroendocrine tumors patients are treated each year.",
			},
			{
				id: 3,
				title: "Johns Hopkins Hospital",
				image:
					"https://listtop10s.com/wp-content/uploads/2013/11/Best-Cancer-treatment-hospitals-Johns-Hopkins-Hospital.jpg",
				description:
					"The Johns Hopkins Hospital is widely recognized as one of the greatest hospitals in the world located in Baltimore, USA. It has the most advanced diagnosis facilities and treatment plans. The researchers of this hospital have got much advancement in diagnosing and treating cancer and has been discovered that cancer is a genetic disease. This hospital with capable staff knows how to maintain a balance between the physical and mental health of the patient. They emphasized that the mental health of the patient is also very important like physical health and therefore completely discuss the treatment plan with the patient until she or he is satisfied. The multi-specialty and integrative access of cancer treatment along with best medical practitioners and best researchers in treatment of cancer in the country contributed a lot in the worldwide reputation of this hospital as one of the world’s best cancer hospital.",
			},
			{
				id: 4,
				title: "Mayo Clinic",
				image:
					"https://listtop10s.com/wp-content/uploads/2013/11/Best-Cancer-treatment-hospitals-Mayo-Clinic.jpg",
				description:
					"The Mayo Clinic located in Rochester, USA, is the first and largest interdisciplinary non-profit medical group practice in the world, containing more than 50,900 allied health staff and 3,800 physicians and scientists. Its great history and heritage in providing the most advanced treatment plans to a large number of patients from all over the world with glimmering research facilities in understanding and treatment of the disease make it among the top 10 best cancer hospitals in the world. It surely understands the pain and anxiety of the patients of cancer and therefore helps them properly in passing expeditiously through the various steps of diagnosis, decision and treatment. It provides sufficient time for doctor-patient discussions and helping the patient in choosing the mode of treatment they want. There are three campuses of Mayo Clinic.",
			},
			{
				id: 5,
				title: "Dana-Farber Cancer Institute",
				image:
					"https://listtop10s.com/wp-content/uploads/2013/11/Best-Cancer-treatment-hospitals-Dana-Farber-Cancer-Institute.jpg",
				description:
					"The Dana-Farber Cancer Institute has cancer centers for almost all types of cancers and is located in Boston, Massachusetts. Each of its specialized centers is devoted to help people in frightening against a different type of cancer. It has a cancer treatment center for children and a cancer care institute for women in assistance with Bingham and Women’s Hospital. This institute shows a great concern for the sufferers of this disease and provides skilled treatment to the cancer patients. It has most competent professionals team and has one of the most concentrated research facility and therefore deserved a position in this list.",
			},
			{
				id: 6,
				title: "University of Washington Medical Center",
				image:
					"https://listtop10s.com/wp-content/uploads/2013/11/Best-Cancer-treatment-hospitals-University-of-Washington-Medical-Center.jpg",
				description:
					"The University of Washington Medical Center is a nationally renowned hospital located in Washington, USA. It is one of the best Hospitals of America and is a great cancer care institute in that area. It is a 450 beds hospital, having Gamma Knife and Trilogy Linear Accelerator for the treatment and provides services in diagnosis, treatment and then follow-up treatment plans for patients. It provides treatment of about twenty types of cancer along with other services in other specialties. It provides radiotherapy and is the home of the first pain center of the world and is renowned for its efficiency in transplants.",
			},
			{
				id: 7,
				title: "Massachusetts General Hospital",
				image:
					"https://listtop10s.com/wp-content/uploads/2013/11/Best-Cancer-treatment-hospitals-Massachusetts-General-Hospital.jpg",
				description:
					"The Massachusetts General Hospital is one of the leading cancer treatment hospitals and research centers located in the West End neighborhood of Boston, Massachusetts. It is the second largest hospital in New England having 1,057 beds and is the third largest hospital in the United States. It offers benevolent treatment to cancer patients suffering from breast cancer, bone cancer, bladder cancer and many other types of cancer. It gives treatment to the patients suffering from any stage of cancer and also offers services that aids in early diagnosis of the cancer.",
			},
			{
				id: 8,
				title:
					"University of California, San Francisco Medical Center",
				image:
					"https://listtop10s.com/wp-content/uploads/2013/11/Best-Cancer-treatment-hospitals-University-of-California-San-Francisco-Medical-Center.jpg",
				description:
					"The University of California, San Francisco Medical Center is a world well known research hospital and is one of the best teaching hospitals in the world. It is one of the prominent hospitals of the United States where complex diseases from all around the world seek treatment. Its cancer care and research center is open to all who want to get information about cancer and also aids in its treatment. It has accommodation for 600 patients and it treats almost 17 types of cancer with the help of using different techniques. It is ranked as the number one hospital in the United States for transplants and is among the top ten best cancer hospitals in the world.",
			},
			{
				id: 9,
				title: "Stanford Clinic and Hospital",
				image:
					"https://listtop10s.com/wp-content/uploads/2013/11/Best-Cancer-treatment-hospitals-Stanford-Clinic-and-Hospital.jpg",
				description:
					"The Stanford Clinic and Hospital is located in California and is widely recognized for its work in cancer diagnosis and treatment and in other specialties like organ transplantation, cardiovascular medicine and surgery, neurology and neurosurgery. This hospital has staff and facilities that are trained to deal with emergencies. Just on one call to this hospital it provides a helicopter with two flight nurses and can accommodate two patients.",
			},
			{
				id: 10,
				title: "Ronald Reagan UCLA Medical Centre",
				image:
					"https://listtop10s.com/wp-content/uploads/2013/11/Best-Cancer-treatment-hospitals-Ronald-Reagan-UCLA-Medical-Centre.jpg",
				description:
					"The Ronald Reagan UCLA Medical Center also referred as UCLA Medical Center is located in Los Angeles, California, United States on the campus of University of California. Its emergency department is verified as a level I trauma center for pediatrics and adults. This hospital offers facilities in almost all major specialties of medicine and also in dentistry. This hospital and its specialty care facilities collectively make it among the most advanced and comprehensive health care systems in the world.",
			},
		],
	};

	return (
		<div>
			{hospitals.cancer.map((hospital) => (
				<div key={hospital.id} className="hsptl">
					<div>
						<img
							className="hsptlImg"
							src={hospital.image}
							alt={hospital.title}
						/>
					</div>
					<div className="description">
						<h2 style={{ marginBottom: "10px" }}>
							{hospital.id}.{hospital.title}
						</h2>
						<p>{hospital.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Hospitals;
