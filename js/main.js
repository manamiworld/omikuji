'use strict';

{
    const btn = document.getElementById('btn');

        //  ここはなくてもいい
    const target =document.getElementById('target');
    target.addEventListener('click',() => {
        target.textContent = '↑↑上のボタンをクリック!!';
    });

    btn.addEventListener('click', () => {
        const results = ['大吉','中吉','凶','末吉','吉','大凶'];
    //  おみくじの確率設定
        const n = Math.random();
        if (n <0.01) {
            // 1%
            btn.textContent = '大凶';
        } else if (n < 0.05) {
            // 4%
            btn.textContent = '大吉';
        } else if (n < 0.2) {
            // 15%
            btn.textContent = '中吉';
        } else if (n < 0.5)  {
            // 35%
            btn.textContent = '吉';
        } else if (n < 0.7) {
            // 25%
            btn.textContent = '末吉';
        } else {
            // 30%
            btn.textContent = '凶';
        }

    });
}

