import React from "react";
import { Paper } from '@mui/material';

export default function Main() {
    // トップに戻るボタンがクリックされたときの処理
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  // スムーズスクロール
        });
    };

    return (
        <main className="main">
            <Paper elevation={3} className="section">
                <h2>企画書</h2>
                <div className="pdf-container">
                    <iframe
                        src="/files/plan.pdf"
                        width="80%" /* 横幅を狭く調整 */
                        height="500px"
                        title="企画書"
                    ></iframe>
                </div>
            </Paper>
            <Paper elevation={3} className="section">
                <h2>使用方法</h2>
                <div className="pdf-container">
                    <iframe
                        src="/files/manual.pdf"
                        width="80%" /* 横幅を狭く調整 */
                        height="500px"
                        title="使用方法"
                    ></iframe>
                </div>
            </Paper>
            <Paper elevation={3} className="section">
                <h2>プログラム本体</h2>
                <a href="https://github.com/bserab/digital_disign" target="_blank" rel="noopener noreferrer">
                    GitHub リポジトリ
                </a>
            </Paper>
            <Paper elevation={3} className="section">
                <h2>アプリケーションのダウンロード</h2>
                <a href="/files/application.zip" download>
                    ダウンロード
                </a>
            </Paper>
            <Paper elevation={3} className="section">
                <h2>紹介ビデオ</h2>
                <div className="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/pQevvTMI2bc"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </Paper>

            {/* トップに戻るボタン */}
            <button className="scroll-to-top" onClick={scrollToTop}>
                ↑トップに戻る
            </button>
        </main>
    );
}
