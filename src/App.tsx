import reactLogo from './assets/react.svg'
import tailwindLogo from './assets/tailwindcss.svg'
import reactRouterLogo from './assets/react-router-mark-color.svg'
import typescriptLogo from './assets/typescript.svg'
import prettierLogo from './assets/prettier.svg'
import eslintLogo from './assets/eslint-icon.svg'
import jestLogo from './assets/jest-svgrepo-com.svg'
import netlifyLogo from './assets/netlify-icon.svg'
import githubLogo from './assets/github-mark-white.svg'
import './App.css'

const App = () => {
  return (
    <div className='flex flex-col gap-20'>
			<h1>
          This is a React template created by{' '}
          <a
            className='text-yellow-400 hover:text-yellow-500'
            href='https://github.com/FacundoRocha18'
            target='_blank'
            rel='noreferrer'
            title='Go to Facundo´s GitHub'
          >
            Facundo Rocha
          </a>
        </h1>
      <div className='flex justify-around'>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
        <a href='https://www.typescriptlang.org/' target='_blank' rel='noreferrer'>
          <img src={typescriptLogo} className='logo ts' alt='TypeScript logo' />
        </a>
        <a href='https://tailwindcss.com' target='_blank' rel='noreferrer'>
          <img src={tailwindLogo} className='logo react' alt='TailwindCSS logo' />
        </a>
        <a href='https://reactrouter.com' target='_blank' rel='noreferrer'>
          <img src={reactRouterLogo} className='logo reactRouter' alt='React Router logo' />
        </a>
        <a href='https://prettier.io/' target='_blank' rel='noreferrer'>
          <img src={prettierLogo} className='logo reactRouter' alt='Prettier logo' />
        </a>
        <a href='https://eslint.org/' target='_blank' rel='noreferrer'>
          <img src={eslintLogo} className='logo vite' alt='ESLint logo' />
        </a>
        <a href='https://jestjs.io/' target='_blank' rel='noreferrer'>
          <img src={jestLogo} className='logo reactRouter' alt='Jest logo' />
        </a>
        <a href='https://docs.netlify.com/cli/get-started/' target='_blank' rel='noreferrer'>
          <img src={netlifyLogo} className='logo ts' alt='Netlify logo' />
        </a>
      </div>
      <div className='flex flex-col items-center justify-center gap-12'>
        <h2>
          Vite + React + TypeScript + TailwindCSS + React Router + Prettier + ESLint + Jest +
          Netlify
        </h2>
        
        <p className='read-the-docs'>Click on the logos to learn more about each technology</p>
        <img src={githubLogo} alt='Github logo' />
        <a
          className='w-fit rounded bg-yellow-400 p-2 font-medium text-slate-800 transition-colors duration-300 ease-linear hover:bg-yellow-500'
          href='https://github.com/FacundoRocha18/app-template'
          target='_blank'
        >
          Go to GitHub repository :)
        </a>
      </div>
    </div>
  )
}

export default App
