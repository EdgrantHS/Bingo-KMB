import { useEffect, useState } from "react";
import BingoRow from "./BingoRow";
import Logo from "./assets/Logo KMBUI.png";

const bingoData = [
  [
    { number: 1, text: "Mengikuti kelas lintas fakultas" },
    { number: 2, text: "Mengikuti kelas online" },
    { number: 3, text: "Mengikuti kelas offline" },
    { number: 4, text: "Mengikuti kelas offline" },
    { number: 5, text: "Mengikuti kelas offline" },
  ],
  [
    { number: 6, text: "Mengikuti kelas offline" },
    { number: 7, text: "Mengikuti kelas offline" },
    { number: 8, text: "Mengikuti kelas offline" },
    { number: 9, text: "Mengikuti kelas offline" },
    { number: 10, text: "Mengikuti kelas offline" },
  ],
  [
    { number: 11, text: "Mengikuti kelas offline" },
    { number: 12, text: "Mengikuti kelas offline" },
    { number: 13, text: "Mengikuti kelas offline" },
    { number: 14, text: "Mengikuti kelas offline" },
    { number: 15, text: "Mengikuti kelas offline" },
  ],
  [
    { number: 16, text: "Mengikuti kelas offline" },
    { number: 17, text: "Mengikuti kelas offline" },
    { number: 18, text: "Mengikuti kelas offline" },
    { number: 19, text: "Mengikuti kelas offline" },
    { number: 20, text: "Mengikuti kelas offline" },
  ],
  [
    { number: 21, text: "Mengikuti kelas offline" },
    { number: 22, text: "Mengikuti kelas offline" },
    { number: 23, text: "Mengikuti kelas offline" },
    { number: 24, text: "Mengikuti kelas offline" },
    { number: 25, text: "Mengikuti kelas offline" },
  ],
];

const pertanyaan = [
  "Mengikuti kelas lintas fakultas.",
  "Berpartisipasi dalam kompetisi internasional.",
  "Menjadi relawan dalam proyek lingkungan hidup.",
  "Menjadi pembicara dalam seminar atau webinar.",
  "Mengorganisir acara besar di luar universitas.",
  "Melakukan ziarah ke situs Buddhis penting.",
  "Berpartisipasi dalam upacara Vesak di tempat bersejarah.",
  "Memiliki koleksi literatur Buddhis.",
  "Menonton film dalam tiga bahasa berbeda dalam seminggu.",
  "Berpartisipasi dalam acara pembersihan lingkungan lokal.",
  "Menjadi sukarelawan kegiatan vihara.",
  "Menulis artikel untuk jurnal akademik.",
  "Menjadi mentor.",
  "Belajar di luar negeri.",
  "Memenangkan lomba menulis.",
  "Berpartisipasi dalam proyek penelitian ilmiah.",
  "Menjadi kepala dalam acara.",
  "Mengikuti kursus online tentang topik baru.",
  "Masuk ke dalam gedung perusahaan ternama.",
  "Melakukan kegiatan amal untuk masyarakat.",
  "Menjadi bagian dari tim olahraga dan mengikuti lomba.",
  "Pergi ke vihara di luar negeri.",
  "Belajar alat musik baru dalam sebulan.",
  "Menginap di tempat bersejarah atau unik (seperti kastil atau rumah pohon).",
  "Menanam pohon atau berkebun di rumah.",
];

const selected = [
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
];

export default function App() {
  const [selectedState, setSelectedState] = useState(selected);
  const [bingoCount, setBingoCount] = useState(0);
  const [squareCount, setSquareCount] = useState(0);
  const [nama, setNama] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  // useEffect(() => {
  //   localStorage.setItem("selected", JSON.stringify(selectedState));
  //   localStorage.setItem("nama", JSON.stringify(nama));
  // }, [selectedState, nama]);

  // useEffect(() => {
  //   const selected = localStorage.getItem("selected");
  //   const nama = localStorage.getItem("nama");

  //   if (selected) {
  //     setSelectedState(JSON.parse(selected));
  //   }
  //   if (nama) {
  //     setNama(JSON.parse(nama));
  //   }
  // }, []);

  function countBingo(selected: boolean[][]): number {
    let count = 0;

    // Check horizontal lines
    for (let i = 0; i < 5; i++) {
      if (selected[i].every((cell) => cell === true)) {
        count++;
      }
    }

    // Check vertical lines
    for (let i = 0; i < 5; i++) {
      let verticalBingo = true;
      for (let j = 0; j < 5; j++) {
        if (!selected[j][i]) {
          verticalBingo = false;
          break;
        }
      }
      if (verticalBingo) {
        count++;
      }
    }

    // Check diagonal lines
    let diagonalBingo1 = true;
    let diagonalBingo2 = true;
    for (let i = 0; i < 5; i++) {
      if (!selected[i][i]) {
        diagonalBingo1 = false;
      }
      if (!selected[i][4 - i]) {
        diagonalBingo2 = false;
      }
    }
    if (diagonalBingo1) {
      count++;
    }
    if (diagonalBingo2) {
      count++;
    }

    setBingoCount(count);
    return count;
  }

  useEffect(() => {
    console.log(countBingo(selectedState));
    if (countBingo(selectedState) >= 3) {
      setBingoCount(3);
      setTimeout(() => {
        alert("BINGO!");
      }, 100);
    }
  }, [selectedState]);

  useEffect(() => {
    let count = 0;
    selectedState.forEach((row) => {
      row.forEach((cell) => {
        if (cell) {
          count++;
        }
      });
    });
    setSquareCount(count);
  }, [selectedState]);

  const handleNama = (index: number, value: string) => {
    const updatedNama = [...nama]; // Copy the current `nama` state
    updatedNama[index] = value; // Update the value at the specified index
    setNama(updatedNama); // Set the new `nama` state
  };

  const handleSelected = (row: number, box: number) => {
    console.log(row, box);
    const newSelected = [...selectedState];
    newSelected[row][box] = !newSelected[row][box];
    setSelectedState(newSelected);
  };

  return (
    <section className='flex flex-col items-center justify-start min-h-screen w-screen bg-gradient-to-b from-blue-50 to-blue-100 p-2'>
      <div className='absolute left-0 top-0 flex items-center justify-center bg-blue-300 shadow-lg rounded-lg w-dvw min-h-12 rounded-b-full pb-4'>
        <img src={Logo} alt='Logo KMBUI' className='h-12 w-12 mx-4' />
        <div>
          <h1 className='text-2xl font-bold text-left'>Bingo Waisak KMBUI</h1>
          <p className='text-left text-gray-500'>Klik kotak untuk menandai</p>
        </div>
      </div>
      <div className='h-12 mb-24' />
      <div
        className='container mx-auto flex flex-col items-center justify-center  w-full md:w-[600px]'
        style={{ aspectRatio: "1/1" }}>
        {bingoData.map((row, index) => (
          <BingoRow
            key={index}
            numbers={row.map((box) => box.number)}
            texts={row.map((box) => box.text)}
            selected={selectedState[index]}
            handleSelected={(box: number) => handleSelected(index, box)}
          />
        ))}
      </div>
      <div
        className='flex flex-col items-start justify-center bg-blue-200 rounded-lg my-8 px-4 py-2 
        transition-all duration-200 ease-in-out transform hover:z-10 hover:shadow-lg shadow hover:scale-[102%]
        border-2 border-blue-300 hover:border-blue-400
      '>
        <div className='flex flex-row items-center justify-center'>
          <p className='text-lg  text-gray-500'>
            Bingo Count: <b className='text-gray-700'>{bingoCount}</b>
          </p>
        </div>
        <div className='flex flex-row items-center justify-center'>
          <p className='text-lg  text-gray-500'>
            Square Count: <b className='text-gray-700'>{squareCount}</b>
          </p>
        </div>
        <div
          className='flex flex-col items-start justify-center bg-blue-300 rounded-lg my-8 mb-2 px-4 py-2 
        transition-all duration-200 ease-in-out transform hover:z-10 hover:shadow-lg
        border-2 border-blue-400
      '>
          Dibutuhkan 3 Bingo untuk mendapatkan hadiah
        </div>
      </div>
      <div className='w-full flex flex-col items-center rounded'>
        <h1 className='text-2xl font-bold text-center mb-4'>Pertanyaan:</h1>
        <div
          className='flex flex-col items-center justify-center bg-blue-200 rounded-lg my-8 px-4 py-2
        transition-all duration-200 ease-in-out transform hover:z-10 hover:shadow-lg shadow hover:scale-[102%]
        border-2 border-blue-300 hover:border-blue-400
        '>
          <ol>
            {pertanyaan.map((pertanyaan, index) => (
              <li key={index} className='text-left mb-4'>
                {index + 1}.
                <label htmlFor={index + " nama"}>{pertanyaan}</label>
                <br />
                <input
                  type='text'
                  id={index + " nama"}
                  name={index + " nama"}
                  className='ml-2 border-2 border-blue-400 rounded-lg p-1 max-w-60 w-full mt-1'
                  placeholder='Nama Orang'
                  value={nama[index]}
                  onChange={(e) => handleNama(index, e.target.value)}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
