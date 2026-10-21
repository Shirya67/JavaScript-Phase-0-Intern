# JS-05 Test Cases

| Case | Age | hasValidBooking | Expected eligibility | Expected category |
|---|---:|---|---|---|
| A | 24 | true | Eligible | Adult |
| B | 24 | false | Complete booking | Adult |
| C | 16 | true | Not eligible under age policy | Teenager |
| D | 12 | false | Not eligible under age policy | Child |
| E | 18 | true | Eligible | Adult |
| F | 13 | true | Not eligible under age policy | Teenager |

The age category is independent of booking eligibility.
