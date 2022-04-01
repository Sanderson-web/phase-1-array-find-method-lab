// code your solution here

function superbowlWin(record) {
    function winningYear(year) {
        if (year.result === "W") {
            return true
        } else {
            return false
        }
    }
    const winningYearObject = record.find(winningYear)
    if (winningYearObject) {
        return winningYearObject.year
    }
}
