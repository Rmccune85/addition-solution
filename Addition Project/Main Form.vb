' Name:         Addition Project
' Purpose:      Display a random addition problem and verify user's answer.
' Programmer:   Ron McCune on 3-9-24

Option Explicit On
Option Strict On
Option Infer Off

Public Class frmMain
    Private Sub btnExit_Click(sender As Object, e As EventArgs) Handles btnExit.Click
        Me.Close()
    End Sub
    'Independent sub procedure.
    Private Sub ClearFields() _
        Handles btnNew.Click
        'Clears both labels and text box to prepare for new numbers.
        lblNum1.Text = String.Empty
        lblNum2.Text = String.Empty
        txtAnswer.Text = String.Empty
    End Sub

    Private Sub btnNew_Click(sender As Object, e As EventArgs) Handles btnNew.Click
        'Generates and displays two new random numbers

        'Generate two random numbers in the range 0..10, inclusive.
        Dim randGen As New Random
        Dim intNum1 As Integer
        Dim intNum2 As Integer
        intNum1 = randGen.Next(11)
        intNum2 = randGen.Next(11)

        'Display these numbers in the labels.
        lblNum1.Text = intNum1.ToString
        lblNum2.Text = intNum2.ToString

        'Enable btnCheck and set focus for txtAnswer
        btnCheck.Enabled = True
        txtAnswer.Focus()
    End Sub

    Private Sub btnCheck_Click(sender As Object, e As EventArgs) Handles btnCheck.Click
        'Checks user answer to addition problem.
        'If user answer is correct, displays "Great job!" message.
        'If answer is incorrect, user can keep trying.

        'Declare and parse intNum1, intNum2, and intAnswer
        Dim intNum1 As Integer
        Dim intNum2 As Integer
        Dim intAnswer As Integer
        Integer.TryParse(lblNum1.Text, intNum1)
        Integer.TryParse(lblNum2.Text, intNum2)
        Integer.TryParse(txtAnswer.Text, intAnswer)

        'Declare and calculate intSum as the correct sum.
        Dim intSum As Integer
        intSum = intNum1 + intNum2

        'Check if answer is correct and display message using MessageBox.
        'Clear fields and return focus to text box as needed.
        If intSum = intAnswer Then
            MessageBox.Show("Great job!")
            If True Then
                ClearFields()
                txtAnswer.Focus()
                btnNew.Focus()
            End If
        Else
            MessageBox.Show("Incorrect try again!")
            If intSum <> intAnswer Then
                txtAnswer.SelectAll()
                txtAnswer.Focus()
            End If
        End If

    End Sub
    Private Sub txtAnswer_Enter(sender As Object, e As EventArgs) Handles txtAnswer.Enter
        txtAnswer.SelectAll()
    End Sub

End Class
