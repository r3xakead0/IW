'use strict';
const router = require('express').Router();
// const moment = require('moment');
// const path = require('path');
// const fs = require('fs-extra');

// const pool = require('../database');
// const { isLoggedIn } = require('../lib/auth');

// router.get('/add', isLoggedIn, async (req, res) => {
//     Promise.all([
//         await pool.query('SELECT * FROM equipo WHERE activo = ?', true),
//         await pool.query('SELECT * FROM sala WHERE activo = ?', true),
//         await pool.query('SELECT * FROM supervisor WHERE activo = ?', true),
//         await pool.query('SELECT * FROM cliente WHERE activo = ?', true),
//         await pool.query('SELECT * FROM proveedor WHERE activo = ?', true),
//         await pool.query('SELECT * FROM especialidad WHERE activo = ?', true),
//         await pool.query('SELECT * FROM actividad WHERE idEspecialidad = 1 and activo = ?', true),
//         await pool.query('select MAX(nroTicket) nroTicket from ticket')
//     ]).then(values => {
//         const equipos = values[0];
//         const salas = values[1];
//         const supervisores = values[2];
//         const clientes = values[3];
//         const proveedores = values[4];
//         const especialidades = values[5];
//         const actividades = values[6];
//         const nroTicket = ((values[7][0]) ? values[7][0].nroTicket + 1 : 1);
//         res.render('tickets/add', { nroTicket, equipos, salas, supervisores, clientes, proveedores, especialidades, actividades });
//     });
// });

// router.post('/add', isLoggedIn, async (req, res) => {
//     const form = req.body;

//     var fechaHoraInicio = moment(form.fechaHoraInicio).format('YYYY-MM-DD HH:mm');
//     var fechaHoraFin = moment(form.fechaHoraFin).format('YYYY-MM-DD HH:mm');

//     const newTicket = {
//         nroTicket: form.nroTicket,
//         idSala: form.sala,
//         idActividad: form.actividad,
//         idEquipo: form.equipo,
//         fechaHoraInicio: fechaHoraInicio,
//         fechaHoraFin: fechaHoraFin,
//         idSupervisor: form.supervisor,
//         idCliente: form.cliente,
//         idProveedor: form.proveedor,
//         descripcionTrabajo: form.descripcionTrabajo,
//         personalCliente: form.personalCliente,
//         personalProveedor: form.personalProveedor,
//         personalGtd: form.personalGtd,
//         idUsuario: req.user.idUsuario
//     };
//     await pool.query('INSERT INTO ticket set ?', [newTicket]);

//     if (req.file) {

//         const fileUrl = form.nroTicket.toString() + '-1';

//         const fileTempPath = req.file.path;
//         const ext = path.extname(req.file.originalname).toLowerCase();
//         const targetPath = path.resolve(`src/public/document/${fileUrl}${ext}`);

//         if (ext === '.pdf') {
//             await fs.rename(fileTempPath, targetPath);
//             const newDocument = {
//                 nombre: path.basename(targetPath),
//                 nroTicket: form.nroTicket
//             };

//             await pool.query('INSERT INTO documento set ?', [newDocument]);
//         } else {
//             await fs.unlink(fileTempPath);
//             res.status(500).json({ error: 'Solo archivos PDF' });
//         }

//     }

//     req.flash('success', 'Ticket guardado satisfactoriamente');
//     res.redirect('/tickets');
// });

// router.get('/:page?', isLoggedIn, async (req, res) => {

//     const result = await pool.query('SELECT COUNT(1) count FROM ticket');

//     var pageSize = 10;
//     var page = req.query.page || 1;
//     var totalRows = result[0].count;
//     var pageCount = Math.ceil(totalRows / pageSize);
//     var limit = pageCount > pageSize ? pageCount : pageSize;

//     const consulta = await pool.query('CALL ListarTareas(' + pageSize + ',' + page + ')');
//     let tickets = consulta[0];
//     tickets.forEach(ticket => {
//         let documentos = [];
//         const arrDocumentos = ticket.documentos.split(',');
//         arrDocumentos.forEach(element => {
//             documentos.push({ nombre: element });
//         });
//         ticket.documentos = documentos;
//     });

//     res.render('tickets/list', {
//         tickets: tickets,
//         pagination: {
//             page: page,
//             limit: pageSize,
//             totalRows: totalRows,
//             pageCount: pageCount
//         }
//     });
// });

// router.get('/delete/:id', isLoggedIn, async (req, res) => {
//     const { id } = req.params;

//     const documentos = await pool.query('SELECT * FROM documento WHERE nroticket = ?', [id]);

//     for (let i = 0; i < documentos.length; i++) {
//         let document = documentos[i];
//         let filePath = path.resolve(`src/public/document/${document.nombre}`);
//         await fs.unlink(filePath);
//     }

//     await pool.query('DELETE FROM documento WHERE nroticket = ?', [id]);

//     await pool.query('DELETE FROM ticket WHERE nroticket = ?', [id]);

//     req.flash('success', 'Ticket eliminado satisfactoriamente');
//     res.redirect('/tickets');
// });

// router.get('/edit/:id', isLoggedIn, async (req, res) => {
//     const { id } = req.params;

//     var tickets = await pool.query('SELECT t0.*, t1.idEspecialidad FROM ticket t0 INNER JOIN actividad t1 ON t1.idActividad = t0.idActividad WHERE t0.nroticket = ?', [id])
//     const ticket = tickets[0];

//     if (ticket) {
//         Promise.all([
//             await pool.query('SELECT * FROM equipo WHERE activo = ?', true),
//             await pool.query('SELECT * FROM sala WHERE activo = ?', true),
//             await pool.query('SELECT * FROM supervisor WHERE activo = ?', true),
//             await pool.query('SELECT * FROM cliente WHERE activo = ?', true),
//             await pool.query('SELECT * FROM proveedor WHERE activo = ?', true),
//             await pool.query('SELECT * FROM especialidad WHERE activo = ?', true),
//             await pool.query('SELECT * FROM actividad WHERE idEspecialidad = ' + ticket.idEspecialidad + ' and activo = ?', true),
//         ]).then(values => {
//             const equipos = values[0];
//             const salas = values[1];
//             const supervisores = values[2];
//             const clientes = values[3];
//             const proveedores = values[4];
//             const especialidades = values[5];
//             const actividades = values[6];

//             var fechaHoraInicio = moment(ticket.fechaHoraInicio).format('YYYY-MM-DDTHH:mm');
//             var fechaHoraFin = moment(ticket.fechaHoraFin).format('YYYY-MM-DDTHH:mm');
//             ticket.fechaHoraInicio = fechaHoraInicio;
//             ticket.fechaHoraFin = fechaHoraFin;

//             res.render('tickets/edit', { ticket, equipos, salas, supervisores, clientes, proveedores, especialidades, actividades });
//         });
//     } else {
//         res.redirect('/tickets');
//     }
// });

// router.post('/edit/:id', isLoggedIn, async (req, res) => {
//     const { id } = req.params;

//     const form = req.body;
//     var fechaHoraInicio = moment(form.fechaHoraInicio).format('YYYY-MM-DD HH:mm');
//     var fechaHoraFin = moment(form.fechaHoraFin).format('YYYY-MM-DD HH:mm');

//     const newTicket = {
//         idSala: form.sala,
//         idActividad: form.actividad,
//         idEquipo: form.equipo,
//         fechaHoraInicio: fechaHoraInicio,
//         fechaHoraFin: fechaHoraFin,
//         idSupervisor: form.supervisor,
//         idCliente: form.cliente,
//         idProveedor: form.proveedor,
//         descripcionTrabajo: form.descripcionTrabajo,
//         personalCliente: form.personalCliente,
//         personalProveedor: form.personalProveedor,
//         personalGtd: form.personalGtd,
//         idUsuario: req.user.idUsuario
//     };

//     await pool.query('UPDATE ticket set ? WHERE nroticket = ?', [newTicket, id]);
//     req.flash('success', 'Ticket actualizado satisfactoriamente');
//     res.redirect('/tickets');
// });

// router.get('/document/:id', isLoggedIn, async (req, res) => {
//     const { id } = req.params;
//     res.render('tickets/document', { nroTicket: id });
// });

// router.post('/document', isLoggedIn, async (req, res) => {
//     const { nroTicket, documento } = req.body;

//     const consulta = await pool.query('SELECT * FROM documento WHERE nroTicket = ?', nroTicket);
//     const fileUrl = nroTicket.toString() + '-' + (consulta.length + 1).toString();

//     const fileTempPath = req.file.path;
//     const ext = path.extname(req.file.originalname).toLowerCase();
//     const targetPath = path.resolve(`src/public/document/${fileUrl}${ext}`);

//     if (ext === '.pdf') {
//         await fs.rename(fileTempPath, targetPath);
//         const newDocument = {
//             nombre: path.basename(targetPath),
//             nroTicket: nroTicket
//         };

//         await pool.query('INSERT INTO documento set ?', [newDocument]);
//         res.redirect('/tickets');
//     } else {
//         await fs.unlink(fileTempPath);
//         res.status(500).json({ error: 'Solo archivos PDF' });
//     }

// });

module.exports = router;