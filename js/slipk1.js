// =========================================================
// ไฟล์ js/Depositkbank.js (แจ้งเตือนเงินเข้า กสิกร 1)
// =========================================================

// 1. ฟังก์ชันเพื่อโหลดฟอนต์ตามต้นฉบับ
function loadFonts() {
    const fonts = [
        new FontFace('SukhumvitSetThin', 'url(assets/fonts/SukhumvitSet-Thin.woff)'),
        new FontFace('SukhumvitSetText', 'url(assets/fonts/SukhumvitSet-Text.woff)'),
        new FontFace('SukhumvitSetLight', 'url(assets/fonts/SukhumvitSet-Light.woff)'),
        new FontFace('SukhumvitSetMedium', 'url(assets/fonts/SukhumvitSet-Medium.woff)'),
        new FontFace('SukhumvitSetSemiBold', 'url(assets/fonts/SukhumvitSet-SemiBold.woff)'),
        new FontFace('SukhumvitSetBold', 'url(assets/fonts/SukhumvitSet-Bold.woff)'),
        new FontFace('SukhumvitSetExtraBold', 'url(assets/fonts/SukhumvitSet-Extra%20Bold.woff)'),
        new FontFace('SFThonburiLight', 'url(assets/fonts/SFThonburi.woff)'),
        new FontFace('SFThonburiRegular', 'url(assets/fonts/SFThonburi-Regular.woff)'),
        new FontFace('SFThonburiSemiBold', 'url(assets/fonts/SFThonburi-Semibold.woff)'),
        new FontFace('SFThonburiBold', 'url(assets/fonts/SFThonburi-Bold.woff)'),
        new FontFace('KanitThin', 'url(assets/fonts/Kanit-Thin.woff)'),
        new FontFace('KanitExtraLight', 'url(assets/fonts/Kanit-ExtraLight.woff)'),
        new FontFace('KanitLight', 'url(assets/fonts/Kanit-Light.woff)'),
        new FontFace('KanitRegular', 'url(assets/fonts/Kanit-Regular.woff)'),
        new FontFace('KanitMedium', 'url(assets/fonts/Kanit-Medium.woff)'),
        new FontFace('KanitSemiBold', 'url(assets/fonts/Kanit-SemiBold.woff)'),
        new FontFace('KanitBold', 'url(assets/fonts/Kanit-Bold.woff)'),
        new FontFace('KanitExtraBold', 'url(assets/fonts/Kanit-ExtraBold.woff)'),
        new FontFace('KanitBlack', 'url(assets/fonts/Kanit-Black.woff)'),
        new FontFace('BangkokTime1', 'url(assets/fonts/Bangkok-Time1.woff)'),
        new FontFace('BangkokTime2', 'url(assets/fonts/Bangkok-Time2.woff)'),
        new FontFace('BangkokMoney', 'url(assets/fonts/Bangkok-Money.woff)'),
        new FontFace('BangkokTime', 'url(assets/fonts/Bangkok-Time.woff)'),
        new FontFace('THSarabunRegular', 'url(assets/fonts/THSarabun.woff)'),
        new FontFace('THSarabunBold', 'url(assets/fonts/THSarabun-Bold.woff)'),
        new FontFace('THSarabunItalic', 'url(assets/fonts/THSarabun-Italic.woff)'),
        new FontFace('THSarabunBoldItalic', 'url(assets/fonts/THSarabun-BoldItalic.woff)'),
        new FontFace('THSarabunNew', 'url(assets/fonts/THSarabunNew.woff)'),
        new FontFace('THSarabunNewBold', 'url(assets/fonts/THSarabunNew-Bold.woff)'),
        new FontFace('THSarabunNewItalic', 'url(assets/fonts/THSarabunNew-Italic.woff)'),
        new FontFace('THSarabunNewBoldItalic', 'url(assets/fonts/THSarabunNew-BoldItalic.woff)'),
        new FontFace('DXKrungthaiSemiBold', 'url(assets/fonts/DX-Krungthai-SemiBold.woff)'),
        new FontFace('DXKrungthaiThin', 'url(assets/fonts/DX-Krungthai-Thin.woff)'),
        new FontFace('DXSCB', 'url(assets/fonts/DX-SCB.woff)'),
        new FontFace('DXTTBBold', 'url(assets/fonts/DX-TTB-bold.woff)'),
        new FontFace('DXTTBRegular', 'url(assets/fonts/DX-TTB-regular.woff)'),
        new FontFace('DXKrungthaiBold', 'url(assets/fonts/DX-Krungthai-Bold.woff)'),
        new FontFace('DXKrungthaiMedium', 'url(assets/fonts/DX-Krungthai-Medium.woff)'),
        new FontFace('DXKrungthaiRegular', 'url(assets/fonts/DX-Krungthai-Regular.woff)'),
        new FontFace('TTBMoney', 'url(assets/fonts/TTB Money.woff)'),
        new FontFace('CoreSansLight', 'url(assets/fonts/Core-Sans-E-W01-35-Light.woff)'),
        new FontFace('CoreSansBold', 'url(assets/fonts/Core-Sans-N-65-Bold.woff)'),
        new FontFace('THSarabun', 'url(assets/fonts/THSarabun.woff)'),
        // kurious
        new FontFace('kuriousRegular', 'url(assets/fonts/kurious-Regular.woff)'),
        new FontFace('kuriousMedium', 'url(assets/fonts/kurious-medium.woff)'),
        new FontFace('kuriousSemiBold', 'url(assets/fonts/kurious-semibold.woff)'),
        new FontFace('kuriousBold', 'url(assets/fonts/kurious-Bold.woff)')
    ];

    return Promise.all(fonts.map(font => font.load().catch(e => console.warn('Font load error:', e)))).then(function(loadedFonts) {
        loadedFonts.forEach(function(font) {
            if(font) document.fonts.add(font);
        });
    });
}

window.onload = function() {
    // 2. ไม่เซ็ต setCurrentDateTime(); เพื่อหลีกเลี่ยงการไปทับเวลาของพี่ที่ตั้งให้ sync อัตโนมัติตอนเริ่ม
    // อัพเดทเดือนและปีทุกครั้งที่โหลดหน้าเว็บ
    updateMonthAndYear();

    loadFonts().then(function() {
        document.fonts.ready.then(function() {
            updateDisplay(); 
        });
    }).catch(function() {
        updateDisplay();
    });
};

function padZero(number) {
    return number < 10 ? '0' + number : number;
}

// 3. อัพเดทเดือนและปีปัจจุบัน
function updateMonthAndYear() {
    const today = new Date();
    
    const shortThaiMonths = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
    const fullThaiMonths = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];

    const day = today.getDate();
    const shortMonth = shortThaiMonths[today.getMonth()];
    const fullMonth = fullThaiMonths[today.getMonth()];
    const year = today.getFullYear() + 543; 

    // อัพเดทรูปแบบ เดือนย่อ ปี
    const monthAndYear = `${shortMonth} ${year % 100}`;
    const elemMY = document.getElementById('monthandyear');
    if (elemMY && !elemMY.value) elemMY.value = monthAndYear;

    // อัพเดทรูปแบบ วัน เดือนเต็ม ปี
    const monthMonthYear = `${day} ${fullMonth} ${year % 100}`;
    const elemMMY = document.getElementById('monthmonthyear');
    if (elemMMY && !elemMMY.value) elemMMY.value = monthMonthYear;
}

let qrCodeImage = null;
let powerSavingMode = false;

function togglePowerSavingMode() {
    powerSavingMode = !powerSavingMode;
    const powerSavingButton = document.getElementById('powerSavingMode');
    if (powerSavingButton) {
        if (powerSavingMode) {
            powerSavingButton.classList.remove('btn-outline-warning');
            powerSavingButton.classList.add('btn-warning');
        } else {
            powerSavingButton.classList.remove('btn-warning');
            powerSavingButton.classList.add('btn-outline-warning');
        }
    }
    updateDisplay();
}

window.updateBatteryUI = function() {
    const val = document.getElementById('battery').value;
    const levelText = document.getElementById('battery-level');
    if (levelText) levelText.innerText = val;
};

// 4. ฟังก์ชันวาดสลิปหลัก
window.updateDisplay = async function() {
    const datetime = document.getElementById('datetime')?.value || '-';
    const batteryLevel = document.getElementById('battery')?.value || '100';
    const sendername = document.getElementById('sendername')?.value || '-';
    const senderaccount = document.getElementById('senderaccount')?.value || '-';
    const monthandyear = document.getElementById('monthandyear')?.value || '-';
    const monthmonthyear = document.getElementById('monthmonthyear')?.value || '-';
    const money01 = document.getElementById('money01')?.value || '-';
    
    const bank1 = document.getElementById('bank1')?.value || '-';
    const senderaccount1 = document.getElementById('senderaccount1')?.value || '-';
    const name1 = document.getElementById('name1')?.value || '-';
    const bank2 = document.getElementById('bank2')?.value || '-';
    
    const choose1 = document.getElementById('choose1')?.value || '-';
    let money1 = document.getElementById('money1')?.value || '-';
    const time1 = document.getElementById('time1')?.value || '-';
    
    const choose2 = document.getElementById('choose2')?.value || '-';
    let money2 = document.getElementById('money2')?.value || '-';
    const time2 = document.getElementById('time2')?.value || '-';
    
    const choose3 = document.getElementById('choose3')?.value || '-';
    let money3 = document.getElementById('money3')?.value || '-';
    const time3 = document.getElementById('time3')?.value || '-';
    
    const choose4 = document.getElementById('choose4')?.value || '-';
    let money4 = document.getElementById('money4')?.value || '-';
    const time4 = document.getElementById('time4')?.value || '-';
    
    const choose5 = document.getElementById('choose5')?.value || '-';
    let money5 = document.getElementById('money5')?.value || '-';
    
    // จัดการลอจิกใส่เครื่องหมาย - ตามประเภท "โอนเงิน / รับเงินโอน"
    const manageSign = (chooseVal, moneyVal) => {
        let cleanMoney = moneyVal.replace(/-/g, '');
        if (chooseVal === 'โอนเงิน') return '-' + cleanMoney;
        return cleanMoney;
    };

    money1 = manageSign(choose1, money1);
    if(document.getElementById('money1')) document.getElementById('money1').value = money1;

    money2 = manageSign(choose2, money2);
    if(document.getElementById('money2')) document.getElementById('money2').value = money2;

    money3 = manageSign(choose3, money3);
    if(document.getElementById('money3')) document.getElementById('money3').value = money3;

    money4 = manageSign(choose4, money4);
    if(document.getElementById('money4')) document.getElementById('money4').value = money4;

    money5 = manageSign(choose5, money5);
    if(document.getElementById('money5')) document.getElementById('money5').value = money5;

    const canvas = document.getElementById('canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // โหลดพื้นหลัง (Async ป้องกันจอขาว)
    const loadImage = (src) => new Promise(res => {
        const img = new Image();
        img.onload = () => res(img);
        img.onerror = () => res(null);
        img.src = src;
    });

    const bgImg = await loadImage('assets/image/bs/background-Depositkbank1.jpg');

    if (bgImg) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
    } else {
        ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // กำหนดสีของจำนวนเงินตามประเภท
    const getTextColor = (chooseVal) => chooseVal === 'โอนเงิน' ? '#d74738' : '#45c2b1';

    drawText(ctx, `${datetime}`, 63.4, 45.8, 22.50, 'SFThonburiSemiBold', '#ffffff', 'left', 1.5, 3, 0, 0, 800, 0);
    
    drawText(ctx, `${sendername}`, 122.8, 150.2, 26.07, 'kuriousMedium', '#45c2b1', 'left', 1.5, 3, 0, 0, 800, 0);
    drawText(ctx, `${senderaccount}`, 122.8, 175.9, 19.65, 'kuriousMedium', '#ffffff', 'left', 50, 3, 0, 0, 400, 0);
    drawText(ctx, `${monthandyear}`, 20.6, 423.9, 21.00, 'kuriousBold', '#555555', 'left', 1.5, 3, 0, 0, 800, 0);
    drawText(ctx, `${monthmonthyear}`, 20.6, 478.2, 23.45, 'kuriousBold', '#555555', 'left', 1.5, 3, 0, 0, 800, 0);

    drawText(ctx, `${money01}`, 20.6, 201.8, 18, 'kuriousSemiBold', '#ffffff', 'right', 1.5, 3, 0, 0, 800, 0);
    drawText(ctx, `${money01}`, 20.6, 229.1, 18, 'kuriousSemiBold', '#ffffff', 'right', 1.5, 3, 0, 0, 800, 0);
    drawText(ctx, `ข้อมูล ณ เวลา ${time1} น.`, 20.6, 259.1, 16.08, 'kuriousMedium', '#b3b3b3', 'right', 1.5, 3, 0, 0, 800, 0);
    
    // รายการ 1
    drawText(ctx, `${choose1}`, 20.6, 546.0, 19.56, 'kuriousMedium', '#4d4d4d', 'left', 1.5, 3, 0, 0, 800, 0);
    drawText(ctx, `${money1} บาท`, 17.4, 546.0, 19.65, 'kuriousMedium', getTextColor(choose1), 'right', 1.5, 3, 0, 0, 800, 0);
    drawText(ctx, `${time1} น.`, 20.6, 582.5, 16.30, 'kuriousMedium', '#808080', 'left', 1.5, 3, 0, 0, 800, 0);

    drawText(ctx, `${bank1}`, 20.6, 650, 20.65, 'kuriousBold', '#4d4d4d', 'left', 1.5, 3, 0, 0, 800, 0);
    drawText(ctx, `${senderaccount1}`, 20.6, 678.9, 19.65, 'kuriousSemiBold', '#4d4d4d', 'right', 1.5, 3, 0, 0, 800, 0);
    drawText(ctx, `${name1}`, 20.6, 711.3, 19.65, 'kuriousSemiBold', '#4d4d4d', 'right', 1.5, 3, 0, 0, 800, 0);
    drawText(ctx, `${bank2}`, 20.6, 743.7, 19.65, 'kuriousSemiBold', '#4d4d4d', 'right', 1.5, 3, 0, 0, 800, 0);
    
    // รายการ 2
    drawText(ctx, `${choose2}`, 20.6, 911.6, 19.65, 'kuriousMedium', '#4d4d4d', 'left', 1.5, 3, 0, 0, 800, 0);
    drawText(ctx, `${money2} บาท`, 17.4, 911.6, 19.65, 'kuriousMedium', getTextColor(choose2), 'right', 1.5, 3, 0, 0, 800, 0);
    drawText(ctx, `${time2} น.`, 20.6, 948.3, 16.30, 'kuriousMedium', '#808080', 'left', 1.5, 3, 0, 0, 800, 0);
    
    // รายการ 3
    drawText(ctx, `${choose3}`, 20.6, 1029, 19.65, 'kuriousMedium', '#4d4d4d', 'left', 1.5, 3, 0, 0, 800, 0);
    drawText(ctx, `${money3} บาท`, 17.4, 1029, 19.65, 'kuriousMedium', getTextColor(choose3), 'right', 1.5, 3, 0, 0, 800, 0);
    drawText(ctx, `${time3} น.`, 20.6, 1066, 16.30, 'kuriousMedium', '#808080', 'left', 1.5, 3, 0, 0, 800, 0);

    // รายการ 4
    drawText(ctx, `${choose4}`, 20.6, 1148.2, 19.65, 'kuriousMedium', '#4d4d4d', 'left', 1.5, 3, 0, 0, 800, 0);
    drawText(ctx, `${money4} บาท`, 17.4, 1148.2, 19.65, 'kuriousMedium', getTextColor(choose4), 'right', 1.5, 3, 0, 0, 800, 0);
    drawText(ctx, `${time4} น.`, 20.6, 1184.9, 16.30, 'kuriousMedium', '#808080', 'left', 1.5, 3, 0, 0, 800, 0);

    // รายการ 5
    drawText(ctx, `${choose5}`, 20.6, 1250.1, 19.65, 'kuriousMedium', '#4d4d4d', 'left', 1.5, 3, 0, 0, 800, 0);
    drawText(ctx, `${money5} บาท`, 17.4, 1250.1, 19.65, 'kuriousMedium', getTextColor(choose5), 'right', 1.5, 3, 0, 0, 800, 0);

    // วาดแบตเตอรี่
    drawBattery(ctx, batteryLevel, powerSavingMode);
};

// =========================================================
// 5. ฟังก์ชันวาดอักษรต้นฉบับ 100% (เพื่อแก้สระลอย)
// =========================================================
function drawText(ctx, text, x, y, fontSize, fontFamily, color, align, lineHeight, maxLines, shadowColor, shadowBlur, maxWidth, letterSpacing) {
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.fillStyle = color;
    ctx.textAlign = 'left';
    ctx.shadowColor = shadowColor || 'transparent';
    ctx.shadowBlur = shadowBlur || 0;

    const paragraphs = text.split('<br>');
    let currentY = y;

    paragraphs.forEach(paragraph => {
        const lines = [];
        let currentLine = '';

        for (let i = 0; i < paragraph.length; i++) {
            const char = paragraph[i];
            const nextChar = i < paragraph.length - 1 ? paragraph[i + 1] : '';
            const isThai = /[\u0E00-\u0E7F]/.test(char);
            const isWhitespace = /\s/.test(char);

            if (isThai && !isWhitespace) {
                const testLine = currentLine + char;
                const metrics = ctx.measureText(testLine);
                const testWidth = metrics.width + (testLine.length - 1) * letterSpacing;

                if (testWidth > maxWidth) {
                    lines.push(currentLine.trim());
                    currentLine = char;
                } else {
                    currentLine = testLine;
                }
            } else {
                const testLine = currentLine + char;
                const metrics = ctx.measureText(testLine);
                const testWidth = metrics.width + (testLine.length - 1) * letterSpacing;

                if (testWidth > maxWidth) {
                    lines.push(currentLine.trim());
                    currentLine = char;
                } else {
                    currentLine = testLine;
                }
            }
        }

        lines.push(currentLine.trim());

        lines.forEach((line, index) => {
            let currentX = x;
            if (align === 'center') {
                currentX = (ctx.canvas.width - ctx.measureText(line).width) / 2 - ((line.length - 1) * letterSpacing) / 2;
            } else if (align === 'right') {
                currentX = ctx.canvas.width - x - ctx.measureText(line).width - ((line.length - 1) * letterSpacing);
            }

            drawTextLine(ctx, line, currentX, currentY, letterSpacing);
            currentY += lineHeight;
            if (maxLines && index >= maxLines - 1) {
                return;
            }
        });
    });
}

function drawTextLine(ctx, text, x, y, letterSpacing) {
    if (!letterSpacing) {
        ctx.fillText(text, x, y);
        return;
    }

    const characters = text.split('');
    let currentPosition = x;

    characters.forEach((char, index) => {
        const charCode = char.charCodeAt(0);
        const prevChar = index > 0 ? characters[index - 1] : null;
        
        const isUpperVowel = (charCode >= 0x0E34 && charCode <= 0x0E37);
        const isToneMark = (charCode >= 0x0E48 && charCode <= 0x0E4C);
        const isBeforeVowel = (charCode === 0x0E31);
        const isBelowVowel = (charCode >= 0x0E38 && charCode <= 0x0E3A);

        let yOffset = 0;
        let xOffset = 0;

        if (isUpperVowel) {
            yOffset = -1;
            xOffset = 0;
        }

        if (isToneMark) {
            if (prevChar && ((prevChar.charCodeAt(0) >= 0x0E34 && prevChar.charCodeAt(0) <= 0x0E37) || prevChar.charCodeAt(0) === 0x0E31)) {
                yOffset = -8;
                xOffset = 0;
            } else {
                yOffset = 0;
                xOffset = -7;
            }
        }

        if (isBeforeVowel) {
            yOffset = -1;
            xOffset = 1;
        }

        if (isBelowVowel) {
            yOffset = 0;
            xOffset = -10;
        }

        ctx.fillText(char, currentPosition + xOffset, y + yOffset);

        if (!isToneMark && !isBeforeVowel && !isBelowVowel) {
            currentPosition += ctx.measureText(char).width + letterSpacing;
        } else {
            currentPosition += ctx.measureText(char).width;
        }
    });
}

function drawBattery(ctx, batteryLevel, powerSavingMode) {
    ctx.lineWidth = 2; 
    ctx.strokeStyle = '#9b9b9b'; 
    ctx.fillStyle = '#ffffff'; 

    let batteryColor = '#28bf2b'; 
    if (batteryLevel <= 20) {
        batteryColor = '#ff0000'; 
    } else if (powerSavingMode) {
        batteryColor = '#fccd0e'; 
    }

    const fillWidth = (batteryLevel / 100) * 29.5; 
    const x = 481.0;
    const y = 30.4;
    const height = 12.8;
    const radius = 4; 

    ctx.fillStyle = batteryColor; 

    ctx.beginPath(); 
    ctx.moveTo(x, y + radius); 
    ctx.lineTo(x, y + height - radius); 
    ctx.arcTo(x, y + height, x + radius, y + height, radius); 
    ctx.lineTo(x + fillWidth - radius, y + height); 
    ctx.arcTo(x + fillWidth, y + height, x + fillWidth, y + height - radius, radius); 
    ctx.lineTo(x + fillWidth, y + radius); 
    ctx.arcTo(x + fillWidth, y, x + fillWidth - radius, y, radius); 
    ctx.lineTo(x + radius, y); 
    ctx.arcTo(x, y, x, y + radius, radius); 
    ctx.closePath(); 
    ctx.fill(); 
}

window.downloadImage = function() {
    const canvas = document.getElementById('canvas');
    if(!canvas) return;
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'deposit_kbank_1.png';
    link.click();
};

const generateBtn = document.getElementById('generate');
if(generateBtn) generateBtn.addEventListener('click', updateDisplay);