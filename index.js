const btnMenu=document.getElementById('btn-menu');
const barUn=document.getElementById('bar1');
const barDeux=document.getElementById('bar2');
const barTrois=document.getElementById('bar3');
const navBar=document.getElementById('navbar');
const btnAlumnis=document.getElementById('btn-alumnis');
const btnEtudiant=document.getElementById('btn-etudiant');
const divAlumnis=document.getElementById('alumnis');
const divEtudiant=document.getElementById('etudiant');

btnMenu.addEventListener('click', ()=>{
    barDeux.classList.toggle('hidden');
    barUn.classList.toggle('rotate-45');
    barUn.classList.toggle('absolute');
    barUn.classList.toggle('mt-1');
    barTrois.classList.toggle('-rotate-45');
    navBar.classList.toggle('h-[100vh]');
    console.log(navBar);
})
btnEtudiant.addEventListener('click', ()=>{
    divEtudiant.classList.add('opacity-100');
    divAlumnis.classList.add('opacity-0');
    btnAlumnis.classList.remove('bg-blue-500');
    btnEtudiant.classList.add('bg-blue-500');
    btnEtudiant.classList.add('text-white');
    btnEtudiant.classList.add('p-1');
    btnEtudiant.classList.add('rounded-full');
    btnAlumnis.classList.remove('text-white');
    btnEtudiant.classList.add('px-4');
    btnEtudiant.classList.add('shadow-xl');
    btnEtudiant.classList.add('font-semibold');
})
btnAlumnis.addEventListener('click', ()=>{
    divEtudiant.classList.remove('opacity-100');
    divAlumnis.classList.remove('opacity-0');
    btnAlumnis.classList.add('bg-blue-500');
    btnEtudiant.classList.remove('text-white');
    btnAlumnis.classList.add('text-white');
    btnEtudiant.classList.remove('bg-blue-500')
})
