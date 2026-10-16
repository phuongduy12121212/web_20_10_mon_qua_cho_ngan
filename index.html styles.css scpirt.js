<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chúc Mừng Ngày Phụ Nữ Việt Nam 20/10</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #111;
            overflow: hidden;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .container {
            text-align: center;
            position: relative;
            z-index: 10;
        }

        /* Hiệu ứng Trái Tim */
        .heart {
            background-color: #ff3366;
            display: inline-block;
            height: 100px;
            position: relative;
            transform: rotate(-45deg);
            width: 100px;
            animation: beat 1.2s infinite;
            box-shadow: 0 0 40px #ff3366;
            cursor: pointer;
        }

        .heart:before,
        .heart:after {
            content: "";
            background-color: #ff3366;
            border-radius: 50%;
            height: 100px;
            position: absolute;
            width: 100px;
        }

        .heart:before {
            top: -50px;
            left: 0;
        }

        .heart:after {
            left: 50px;
            top: 0;
        }

        @keyframes beat {
            0% { transform: rotate(-45deg) scale(1); }
            20% { transform: rotate(-45deg) scale(1.25); }
            40% { transform: rotate(-45deg) scale(1); }
        }

        /* Lời chúc */
        .greeting {
            margin-top: 60px;
            color: #fff;
            font-size: 28px;
            font-weight: bold;
            text-shadow: 0 0 10px #ff3366, 0 0 20px #ff3366;
            opacity: 0;
            transform: translateY(20px);
            transition: all 1s ease;
        }

        .greeting.show {
            opacity: 1;
            transform: translateY(0);
        }

        .sub-text {
            color: #ffb3c6;
            font-size: 18px;
            margin-top: 15px;
            font-style: italic;
        }

        /* Bong bóng / Cánh hoa rơi */
        .particle {
            position: absolute;
            background-color: #ff6699;
            border-radius: 50%;
            opacity: 0.6;
            animation: float linear infinite;
        }

        @keyframes float {
            0% {
                transform: translateY(100vh) scale(0);
                opacity: 0;
            }
            50% {
                opacity: 0.8;
            }
            100% {
                transform: translateY(-10vh) scale(1.2);
                opacity: 0;
            }
        }
    </style>
</head>
<body>

    <div class="container">
        <!-- Nhấp vào trái tim để hiện lời chúc -->
        <div class="heart" onclick="showMessage()"></div>
        <div class="greeting" id="message">
            💐 Chúc Mừng Ngày 20/10! 💐
            <div class="sub-text">Chúc bạn luôn xinh đẹp, rạng rỡ, may mắn và hạnh phúc mỗi ngày! ❤️</div>
        </div>
    </div>

    <script>
        // Lời chúc xuất hiện khi bấm vào trái tim
        function showMessage() {
            document.getElementById('message').classList.add('show');
        }

        // Tạo hiệu ứng hạt lấp lánh rơi
        function createParticles() {
            const colors = ['#ff3366', '#ff6699', '#ff99bb', '#ffffff'];
            for (let i = 0; i < 35; i++) {
                let particle = document.createElement('div');
                particle.classList.add('particle');
                
                let size = Math.random() * 12 + 4;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                
                particle.style.left = Math.random() * 100 + 'vw';
                particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
                particle.style.animationDelay = Math.random() * 5 + 's';
                
                document.body.appendChild(particle);
            }
        }

        createParticles();
    </script>
</body>
</html>
