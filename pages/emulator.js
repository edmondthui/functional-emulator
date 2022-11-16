import Head from 'next/head';
import { makeStyles } from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/pages/emulator.js";
import Script from 'next/script'

const useStyles = makeStyles(styles);

export default function Components() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: 
          `EJS_player = '#game'
          EJS_core = 'gba'
          EJS_biosUrl = '/static/bios/gba_bios.bin'
          EJS_gameUrl = '/static/rom/gba/pokemon-emerald.zip'
          EJS_pathtodata = 'https://rawcdn.githack.com/EmulatorJS/EmulatorJS/main/data/'` }}></script>
      </Head>
      <div className={classes.container}>
          <div id='game'></div>
      </div>
      <Script src="https://rawcdn.githack.com/EmulatorJS/EmulatorJS/main/data/loader.js"/>
    </>
  )
}