window.onload = function () {
  var ball = document.getElementById("ball");
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;
  var ballRadius =
    parseInt(window.getComputedStyle(ball).getPropertyValue("width")) / 2;
  var speedX = 2;
  var speedY = 2;

  function moveBall() {
    var ballPositionX = parseInt(
      window.getComputedStyle(ball).getPropertyValue("left")
    );
    var ballPositionY = parseInt(
      window.getComputedStyle(ball).getPropertyValue("top")
    );

    if (
      ballPositionX + speedX > screenWidth - ballRadius ||
      ballPositionX + speedX < ballRadius
    ) {
      speedX = -speedX;
    }

    if (
      ballPositionY + speedY > screenHeight - ballRadius ||
      ballPositionY + speedY < ballRadius
    ) {
      speedY = -speedY;
    }

    ball.style.left = ballPositionX + speedX + "px";
    ball.style.top = ballPositionY + speedY + "px";
  }

  function updateScreenSize() {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
  }

  window.addEventListener("resize", updateScreenSize);

  setInterval(moveBall, 10);
};
