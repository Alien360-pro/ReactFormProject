function Student() {
    let arr = [{
        id: "1x",
        sno: 1,
        Name: "Virat",
        RollNo: 18,
        Section: "A"
    }, {
        id: "2x",
        sno: 2,
        Name: "Vijay",
        RollNo: 59,
        Section: "S"
    }, {
        id: "3x",
        sno: 3,
        Name: "Ronaldo",
        RollNo: 41,
        Section: "G"
    }, {
        id: "4x",
        sno: 4,
        Name: "Sam",
        RollNo: 40,
        Section: "J"
    }]
    function Row(r) {
        return <div key={r.id}>
            <tr>
                <td>{r.sno}</td>
                <td>{r.Name}</td>
                <td>{r.RollNo}</td>
                <td>{r.Section}</td>
            </tr>
        </div>
    }
    let result = arr.map(Row)
    return <div>
        <table border={2} cellPadding={12345677890} >
            <thead>
                <tr>
                    <td>S.No</td>
                <td>Student Name</td>
                <td>Student Roll No</td>
                <td>Student Section</td>
                </tr>
            </thead>
            {result}
        </table>
    </div>
}
export default Student